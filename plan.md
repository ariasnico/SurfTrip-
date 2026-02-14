# Phase 6: Mejoras Visuales — Plan de Implementación State of the Art

## Diagnóstico del Estado Actual

| Aspecto | Estado | Detalle |
|---|---|---|
| **Renderer** | Bueno | PCFSoftShadowMap, ACES Filmic, exposure 1.1 |
| **Post-Processing** | INEXISTENTE | Sin bloom, vignette, color grading ni ningún pass |
| **Materiales** | Básico | 95% MeshStandardMaterial con color plano, sin texturas |
| **Shaders** | Parcial | Solo Sky (gradient) y Ocean (olas+espuma) son custom |
| **VFX** | Mínimo | 60 puntos de burst, 40 de trail, screen shake |
| **Modelos** | Funcional | Procedurales con geometrías básicas, difícil reconocer medialunas |
| **Iluminación** | Estática | 1 DirectionalLight + HemisphereLight + AmbientLight, no cambia por zona |
| **Sombras** | OK | 1024x1024 shadow map, PCFSoft |
| **Cielo** | OK | Gradient shader con nubes (esferas) y gaviotas |
| **Océano** | OK | Shader de olas con espuma lineal, sin reflejo del cielo |

---

## Arquitectura del Pipeline Visual Propuesto

```
Escena Three.js (forward rendering actual)
    │
    └─ EffectComposer (NUEVO)
         ├─ RenderPass (escena base)
         ├─ UnrealBloomPass (bloom selectivo via layers)
         ├─ Custom ShaderPass: Zone Color Grading
         └─ Custom ShaderPass: Vignette + Film Grain sutil
```

---

## Sub-fase 6.1: Post-Processing Pipeline

**Archivos**: `src/vfx/PostProcessing.ts` (NUEVO), `src/core/SceneManager.ts` (MOD)

### 6.1.1 — EffectComposer Setup
- Crear clase `PostProcessing` que encapsule el pipeline
- Importar de `three/examples/jsm/postprocessing/`: EffectComposer, RenderPass, ShaderPass, UnrealBloomPass
- Integrar en SceneManager: reemplazar `renderer.render()` por `composer.render()`
- Handle de resize (composer.setSize + passes resize)

### 6.1.2 — Bloom Selectivo
- **Técnica**: Selective bloom usando `THREE.Layers`
  - Layer 0: escena normal (todo)
  - Layer 1: objetos que deben brillar (emissivos)
  - Renderizar layer 1 por separado → aplicar bloom → compositar sobre render normal
- **Parámetros**: threshold 0.85, strength 0.4, radius 0.3
- **Objetos bloom**: medialunas (emissive), power-ups, lámparas rambla, fuego parrilla, halo del sol
- **Config por zona**: rutaCostera (sunset) bloom strength 0.6

### 6.1.3 — Color Grading por Zona
- Custom ShaderPass con uniforms interpolables:
  - `uSaturation` (0.8–1.3)
  - `uContrast` (0.9–1.2)
  - `uWarmth` (-0.1–0.2, shift R/B)
  - `uBrightness` (0.95–1.1)
- Configuración por zona:
  - **Chapadmalal**: warmth +0.08, saturation 1.1 — mediodía de playa
  - **Rambla**: warmth 0, saturation 0.95 — tarde urbana
  - **Cariló**: warmth -0.05, saturation 1.2, brightness 0.92 — bosque húmedo sombrío
  - **Ruta Costera**: warmth +0.15, contrast 1.15, saturation 1.25 — sunset dorado
- Los uniforms se interpolan con el ZoneManager existente (misma lógica de blending)

### 6.1.4 — Vignette + Film Grain
- **Vignette**: radius 0.45, softness 0.6 — enfoca atención al centro
- **Film grain**: intensity 0.025, animado con uTime — estética "video de vacaciones"
- Todo en un solo ShaderPass para minimizar draw calls

---

## Sub-fase 6.2: Mejora de Modelos 3D (Claridad y Reconocibilidad)

**Archivos**: `src/gameplay/CollectibleSystem.ts`, `src/world/ObstacleModels.ts`, `src/world/BeachDecor.ts`, `src/gameplay/SurferModel.ts`, `src/world/PalmTree.ts`

### 6.2.1 — Medialunas Reconocibles (PRIORIDAD ALTA)
El TorusGeometry actual se ve como un donut/anillo, no como una medialuna.
- **Geometría nueva**: usar `LatheGeometry` con perfil custom (sección de cuerno/croissant):
  - Definir curva de perfil: forma ovalada achatada que se afina en las puntas
  - `phiStart=0, phiLength=Math.PI` → solo media vuelta = forma de media luna
  - Escalar las puntas más finas que el centro
- **Material mejorado**: dorado con brillo de masa horneada
  - Color: 0xd4923a, roughness 0.4, metalness 0.05
  - Emissive: 0xc47f2a, emissiveIntensity 0.2 (para que "brillen" con el bloom)
  - Capa superior más oscura (simular tostado): crear segundo mesh fino encima con color 0xb8781f
- **Azúcar**: BufferGeometry de 20-30 points blancos sobre la superficie (size 0.02)
- **Escala**: 35% más grandes que ahora para legibilidad a distancia
- **Animación mejorada**: spin + wobble suave en Z (sin-wave 0.1 rad)

### 6.2.2 — Mate Mejorado
- Bombilla: metalness 0.85, roughness 0.15 para que brille como metal real
- Vapor: 3-4 sprite planes translúcidos (white, opacity 0.15) que suben y se disuelven
- Yerba: verde más contrastado contra el marrón del gourd

### 6.2.3 — Parrilla con Fuego
- Reemplazar esferas emissivas por mini particle system (8-12 puntos naranjas/rojos)
- Humo: 3 sprite planes grises que suben con turbulencia sutil
- Brillo en suelo: CircleGeometry plana con emissive naranja, opacity 0.3

### 6.2.4 — Surfista con Expresión
- Ojos: 2 SphereGeometry pequeñas (blancas) + pupilas (negras) en la cara
- Cejas: 2 BoxGeometry finas (color pelo) ligeramente inclinadas → expresión determinada
- Pelo: 2-3 esferas superpuestas con escala diferente para más volumen
- Tabla: quillas más visibles (3 BoxGeometry triangulares)

### 6.2.5 — Palmeras con Más Carácter
- Hojas: curvar las PlaneGeometry con vertex displacement (doblar hacia abajo en las puntas)
- Variación de verde: más claro en puntas, más oscuro en base (vertex colors)
- Tronco: agregar 2-3 "anillos" (Torus finos) para textura de corteza

---

## Sub-fase 6.3: Océano Mejorado

**Archivo**: `src/world/Ocean.ts`

### 6.3.1 — Reflejo del Cielo (Fake Fresnel)
- Pasar uniforms del sky al ocean shader: `uSkyColor` (horizon color)
- En el fragment shader, calcular ángulo de vista simplificado:
  ```glsl
  float fresnel = pow(1.0 - dot(normalize(vNormal), vec3(0,1,0)), 3.0);
  color = mix(waveColor, skyColor, fresnel * 0.4);
  ```
- Resultado: el agua refleja el cielo en ángulos rasantes, se ve más realista

### 6.3.2 — Espuma Mejorada
- Reemplazar espuma lineal por patrón procedural:
  - Usar `fract(sin(dot(uv, vec2(12.9898,78.233))) * 43758.5453)` como base pseudo-noise
  - Animarla con uTime para que las burbujas "vivan"
  - Zona de espuma más ancha cerca de la orilla
- Cresta de espuma en olas altas: white cap en las partes más altas de cada ola

### 6.3.3 — Specular Highlight del Sol
- Agregar uniform `uSunDir` (dirección del sol, derivada de la DirectionalLight)
- Calcular specular Blinn-Phong simplificado en el fragment shader
- Resultado: punto brillante del sol sobre el agua que se mueve con las olas

---

## Sub-fase 6.4: Cielo y Atmósfera

**Archivo**: `src/world/Sky.ts`

### 6.4.1 — Sol Visible
- Crear SphereGeometry (radio 3) con MeshBasicMaterial emissivo blanco/amarillo
- Posicionar según zona:
  - Chapadmalal: alto (y=40, z=100) — mediodía
  - Rambla: medio-lateral (x=30, y=25, z=80)
  - Cariló: bajo, filtrado (y=15, z=60, emissive reducido)
  - Ruta Costera: muy bajo, lateral (x=40, y=8, z=50) — sunset
- Halo: sprite plane con textura radial gradient (canvas 2D → Texture)
- Agregar al bloom layer para que brille

### 6.4.2 — Nubes Mejoradas (Sprite-based)
- Reemplazar clusters de esferas por sprite planes con textura de nube procedural:
  - Generar en canvas 2D: circles con soft edges composited en CanvasRenderingContext2D
  - Resultado: nubes suaves con bordes difuminados, mucho más realistas
  - Material: SpriteMaterial con alphaMap, transparent, depthWrite=false
- Variación por zona:
  - Chapadmalal: blancas, esponjosas, opacidad 0.7
  - Cariló: grisáceas, más densas, opacidad 0.85
  - Ruta Costera: tintadas rosa/naranja

### 6.4.3 — Gradiente con Glow Solar
- Agregar 4to color al shader: `uSunGlow` — zona cálida cerca del horizonte donde está el sol
- Blend basado en distancia angular al sol en el fragment shader
- Resultado: en Ruta Costera, el horizonte tiene ese glow naranja/rosa de atardecer real

---

## Sub-fase 6.5: Iluminación Dinámica por Zona

**Archivos**: `src/core/SceneManager.ts` (MOD), `src/world/Environment.ts` (MOD), `src/data/ZoneData.ts` (MOD)

### 6.5.1 — Configuración de Luz por Zona
Agregar a `ZoneConfig` en ZoneData.ts:
```ts
light: {
  sunColor: number;        // color de DirectionalLight
  sunIntensity: number;    // intensidad
  sunPosition: [number, number, number]; // posición
  ambientIntensity: number;
  hemisphereGround: number; // color del suelo en hemisphere
}
```

Valores por zona:
- **Chapadmalal**: sun 0xfff4e0, intensity 1.2, position [15,25,-10], ambient 0.3
- **Rambla**: sun 0xffe8d0, intensity 1.0, position [10,20,-8], ambient 0.35
- **Cariló**: sun 0xd4e8c0, intensity 0.7, position [5,15,-5], ambient 0.4 (más ambient, menos directa = bosque)
- **Ruta Costera**: sun 0xff8844, intensity 1.4, position [30,8,-3], ambient 0.25 (contraluz dramático)

### 6.5.2 — Transición Suave de Luz
- En Environment.applyZoneColors() (o nuevo método applyZoneLighting()):
  - Interpolar color/intensidad/posición de DirectionalLight
  - Interpolar HemisphereLight ground color
  - Interpolar AmbientLight intensity
- SceneManager debe exponer refs a las luces

### 6.5.3 — Sombras Mejoradas
- Shadow map a 2048x2048 (subir de 1024)
- Shadow camera sigue al jugador (actualizar target cada frame)
- En Cariló: sombras más largas y difusas (ajustar bias)
- En Ruta Costera: sombras MUY largas (sol bajo)

---

## Sub-fase 6.6: VFX Mejorados

**Archivos**: `src/vfx/ParticleSystem.ts` (MOD), `src/vfx/SandTrail.ts` (MOD), `src/vfx/ScreenEffects.ts` (MOD), `src/vfx/AmbientParticles.ts` (NUEVO)

### 6.6.1 — Ribbon Trail del Surfista
- Reemplazar point particles del SandTrail por ribbon geometry:
  - Buffer de últimas 25 posiciones del jugador
  - BufferGeometry con 2 vértices por punto (ancho del ribbon)
  - UV mapping para alpha fade-out (1 → 0 de adelante a atrás)
  - Color por zona: arena, gris cemento, tierra marrón, asfalto oscuro
  - ShaderMaterial con uOpacity uniform

### 6.6.2 — Partículas de Colección Mejoradas
- Burst en espiral: calcular posiciones con ángulo incremental + radio
- 30 partículas (subir de implícito) con tamaño variable
- Color: dorado con variación
- Agregar "+10" floating text via CSS overlay (position:absolute animado)
- Screen flash: CSS overlay dorado opacity 0→0.12→0 en 150ms

### 6.6.3 — Partículas Ambientales por Zona (NUEVO)
- `AmbientParticles.ts`: sistema de partículas flotantes que crean atmósfera
- Pool de ~40 partículas con reciclaje
- Por zona:
  - **Chapadmalal**: granos de arena volando con viento (beige, pequeños, rápidos lateralmente)
  - **Rambla**: hojas secas cayendo (más grandes, movimiento de caída con zigzag)
  - **Cariló**: luciérnagas/fireflies (verdes, con glow emissivo, movimiento errático lento)
  - **Ruta Costera**: polen/polvo dorado (dorado, float suave, muy ambiental)
- Cada partícula: plane sprite o point, con velocidad + lifetime + fade

### 6.6.4 — Screen Effects Mejorados
- **Speed lines**: a alta velocidad (>22 units/s), CSS pseudo-elements en los bordes laterales (líneas blancas semi-transparentes que se elongan verticalmente)
- **Impact flash**: en colisión, 1 frame de overlay blanco (opacity 0.3) + chromatic aberration momentáneo (ShaderPass, offset R/B channels por 2px durante 100ms)
- **Near-miss**: cuando el jugador pasa a <0.5 unidades de un obstáculo sin chocar, sutil distorsión radial (0.2s) + sonido "whoosh" — rewarding risk

---

## Sub-fase 6.7: Track y Suelo con Textura Procedural

**Archivo**: `src/gameplay/TrackManager.ts` (MOD)

### 6.7.1 — Suelo con Shader Procedural
- Reemplazar MeshStandardMaterial del suelo por ShaderMaterial con:
  - Noise pattern (Simplex-like, calculado con hash function en GPU) para textura
  - Mix de 2-3 colores base según noise value
  - Por zona:
    - Chapadmalal: arena suelta (beige claro/oscuro ondulado)
    - Rambla: baldosa/mosaico (patrón cuadriculado con variación)
    - Cariló: tierra con hojas (marrón con manchas verdes)
    - Ruta Costera: asfalto (gris oscuro con líneas más claras)
  - Transición interpolando uniforms de color

### 6.7.2 — Pasto en los Bordes
- A ambos lados del track: grass blades (PlaneGeometry angostas, 10-15 por chunk)
- Animación de viento via vertex shader (sin(position.x + uTime) * 0.1 en las puntas)
- Color por zona (verde playa, verde oscuro bosque, amarillento ruta)
- No renderizar en zona Rambla (es urbano)

---

## Orden de Implementación (Priorizado por Impacto Visual)

| Paso | Sub-fase | Impacto Visual | Complejidad | Archivos Principales |
|------|----------|---------------|-------------|---------------------|
| 1 | 6.1 Post-Processing | **MUY ALTO** | Media | PostProcessing.ts (nuevo), SceneManager.ts |
| 2 | 6.5 Iluminación Dinámica | **MUY ALTO** | Baja | SceneManager.ts, Environment.ts, ZoneData.ts |
| 3 | 6.3 Océano Mejorado | **ALTO** | Media | Ocean.ts |
| 4 | 6.4 Cielo + Sol | **ALTO** | Media | Sky.ts |
| 5 | 6.2.1 Medialunas | **ALTO** | Baja | CollectibleSystem.ts |
| 6 | 6.6 VFX Mejorados | **ALTO** | Media | Particles, SandTrail, AmbientParticles (nuevo) |
| 7 | 6.7 Track con Textura | **MEDIO** | Media | TrackManager.ts |
| 8 | 6.2.2-5 Otros Modelos | **MEDIO** | Media | ObstacleModels, BeachDecor, SurferModel, PalmTree |

---

## Consideraciones de Performance

- **Bloom selectivo con layers**: solo procesa objetos marcados, no toda la escena
- **Shadow map 2048**: máximo, no subir más para mantener 60fps en mobile
- **Partículas ambientales**: max 40, object pooling con ring buffer
- **Noise en GPU**: hash-based, no Simplex real — mínimo overhead
- **Ribbon trail**: max 25 segmentos, buffer circular reutilizado
- **Color grading**: 1 solo shader pass con todos los ajustes combinados
- **Sprites de nubes**: pre-generar textura en canvas 2D al inicio (1 vez), no cada frame
- **Near-miss detection**: reutilizar el loop de colisión existente, solo agregar distance check
- **LOD implícito**: el fog (40-120) ya esconde objetos lejanos

## Resultado Esperado

Un juego que se **siente** como la costa argentina: el sol dorado del atardecer en la ruta costera con sombras kilométricas, la penumbra fresca del bosque de Cariló con luciérnagas, el brillo de las medialunas recién horneadas en la playa de Chapadmalal, la atmósfera urbana de la rambla marplatense. Cada zona visualmente distinta no solo por colores base sino por iluminación, atmósfera, post-processing y detalles ambientales. Las medialunas parecen medialunas reales, el mate humea, la parrilla crepita, y el océano refleja el cielo de cada zona.
