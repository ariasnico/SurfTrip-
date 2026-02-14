# SurfTrip 3D — Plan de Evolución

## Visión General

Transformar **Surf Runner** de un endless runner 2D en canvas a un **runner 3D profesional** estilo Subway Surfers, ambientado en las playas y rutas de la costa argentina. El jugador surfeará/correrá por escenarios 3D esquivando obstáculos, cambiando de carril, recolectando items y desbloqueando contenido.

---

## Stack Tecnológico

| Componente | Tecnología | Justificación |
|---|---|---|
| **Motor 3D** | [Three.js](https://threejs.org/) | Estándar de WebGL, amplia comunidad, excelente rendimiento |
| **Físicas** | [Cannon-es](https://github.com/pmndrs/cannon-es) o custom | Gravedad, colisiones, ragdoll |
| **Bundler** | [Vite](https://vitejs.dev/) | HMR instantáneo, soporte nativo ESM, builds optimizados |
| **Lenguaje** | TypeScript | Type safety, mejor DX, autocompletado |
| **UI/HUD** | HTML/CSS overlay + [GSAP](https://greensock.com/gsap/) | Animaciones fluidas de UI sin cargar el render 3D |
| **Audio** | [Howler.js](https://howlerjs.com/) | Audio cross-browser, sprites, fade, spatial audio |
| **Modelos 3D** | [GLTF/GLB](https://www.khronos.org/gltf/) | Formato estándar, comprimido con Draco |
| **Testing** | Vitest + Playwright | Unit tests + E2E visual |
| **CI/CD** | GitHub Actions | Build, test, deploy automático |
| **Hosting** | Vercel / Netlify / GitHub Pages | Deploy automático por branch |

---

## Arquitectura del Proyecto

```
SurfTrip/
├── public/
│   ├── models/           # Modelos GLB (personajes, obstáculos, escenarios)
│   ├── textures/         # Texturas (arena, agua, cielo, etc.)
│   ├── audio/            # Música y efectos de sonido
│   │   ├── sfx/          # Efectos: salto, moneda, crash, slide, power-up
│   │   └── music/        # Tracks de fondo por zona
│   └── fonts/            # Fuentes custom
├── src/
│   ├── main.ts                 # Entry point
│   ├── Game.ts                 # Game controller (init, loop, state machine)
│   ├── core/
│   │   ├── SceneManager.ts     # Three.js scene, camera, renderer, resize
│   │   ├── InputManager.ts     # Touch (swipe), keyboard, gamepad
│   │   ├── AudioManager.ts     # Howler.js wrapper, sound pools
│   │   ├── AssetLoader.ts      # GLTF loader con progress bar
│   │   └── EventBus.ts         # Pub/sub para comunicación entre módulos
│   ├── gameplay/
│   │   ├── Player.ts           # Modelo, animaciones, estados (run, jump, slide, crash)
│   │   ├── TrackManager.ts     # Generación infinita de chunks de pista
│   │   ├── LaneSystem.ts       # Sistema de 3 carriles con transiciones suaves
│   │   ├── ObstacleSpawner.ts  # Pool de obstáculos, patrones, dificultad
│   │   ├── CollectibleSystem.ts # Monedas, power-ups, patterns (arcos, líneas)
│   │   ├── PowerUpManager.ts   # Lógica de cada power-up
│   │   ├── ScoreManager.ts     # Puntuación, multiplicadores, combos
│   │   └── DifficultyManager.ts # Curva de dificultad progresiva
│   ├── world/
│   │   ├── Environment.ts      # Skybox, iluminación, fog
│   │   ├── Ocean.ts            # Shader de agua animada
│   │   ├── Terrain.ts          # Arena, vegetación procedural
│   │   └── ZoneManager.ts      # Transición entre zonas temáticas
│   ├── vfx/
│   │   ├── ParticleSystem.ts   # Arena, spray de agua, sparkles
│   │   ├── TrailEffect.ts      # Estela del surfer
│   │   └── ScreenEffects.ts    # Shake, flash, motion blur
│   ├── ui/
│   │   ├── HUD.ts              # Score, monedas, multiplicador en-game
│   │   ├── StartScreen.ts      # Menú principal
│   │   ├── GameOverScreen.ts   # Pantalla de derrota con stats
│   │   ├── PauseMenu.ts        # Pausa con resume/quit
│   │   ├── ShopScreen.ts       # Tienda de personajes/tablas
│   │   └── Transitions.ts      # Fades, wipes entre pantallas
│   ├── data/
│   │   ├── characters.ts       # Definición de personajes desbloqueables
│   │   ├── powerups.ts         # Definición de power-ups
│   │   ├── zones.ts            # Configuración de zonas/ambientes
│   │   └── achievements.ts     # Logros y misiones
│   └── utils/
│       ├── ObjectPool.ts       # Pool genérico para performance
│       ├── MathUtils.ts        # Lerp, clamp, random helpers
│       └── SaveManager.ts      # localStorage wrapper con versioning
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## Fases de Desarrollo

---

### FASE 1 — Fundación 3D (Semanas 1-2)

**Objetivo:** Reemplazar el canvas 2D por una escena Three.js funcional con un personaje corriendo en un track infinito.

#### 1.1 Setup del Proyecto
- [ ] Inicializar proyecto con `npm create vite@latest -- --template vanilla-ts`
- [ ] Instalar dependencias: `three`, `@types/three`, `gsap`, `howler`
- [ ] Configurar `tsconfig.json` con strict mode
- [ ] Configurar Vite para alias paths (`@core/`, `@gameplay/`, etc.)
- [ ] Crear estructura de directorios

#### 1.2 SceneManager
- [ ] Crear renderer WebGL con antialiasing y pixel ratio adaptativo
- [ ] Cámara perspectiva con FOV 60°, posición detrás y arriba del jugador
- [ ] Sistema de resize responsivo (mobile-first)
- [ ] Render loop con `requestAnimationFrame` y delta time
- [ ] Iluminación base: DirectionalLight (sol) + AmbientLight + HemisphereLight

#### 1.3 Track Infinito (primera versión)
- [ ] Crear `TrackManager` con sistema de chunks
- [ ] Cada chunk: plano 3D con textura de arena/playa
- [ ] Pool de 5-6 chunks que reciclan posición
- [ ] El "mundo" se mueve hacia el jugador (el jugador está fijo en X)
- [ ] Velocidad base configurable con aceleración progresiva

#### 1.4 Jugador Básico
- [ ] Placeholder con geometría simple (BoxGeometry + color)
- [ ] Posición fija en eje Z (profundidad), se mueve en X (carriles) e Y (salto)
- [ ] Física de salto: velocidad inicial + gravedad + aterrizaje
- [ ] 3 carriles definidos (izquierda, centro, derecha)
- [ ] Transición suave entre carriles con lerp/tween

#### 1.5 InputManager
- [ ] Detección de swipe (touch): arriba=saltar, abajo=deslizar, izq/der=cambiar carril
- [ ] Teclado: flechas o WASD + espacio
- [ ] Umbral de swipe configurable (distancia mínima, velocidad)
- [ ] Buffer de input (registrar acción durante animación de transición)
- [ ] Prevenir scroll/zoom del browser en mobile

---

### FASE 2 — Gameplay Core (Semanas 3-4)

**Objetivo:** Tener un juego jugable con obstáculos, coleccionables y game over.

#### 2.1 Sistema de Obstáculos
- [ ] `ObstacleSpawner` con object pooling (reutilizar meshes)
- [ ] Tipos iniciales de obstáculos:
  - **Bajo** (saltar para esquivar): rocas, lobos marinos, troncos
  - **Alto** (deslizarse para esquivar): ramas, carteles de playa
  - **Carril completo** (cambiar de carril): sombrillas, carpas
- [ ] Spawning por patrones predefinidos + aleatorio
- [ ] Sistema de dificultad que aumenta densidad y velocidad
- [ ] Colisión con hitboxes simplificadas (AABB o esferas)

#### 2.2 Coleccionables
- [ ] Monedas/conchas marinas con rotación y bobbing
- [ ] Patrones de coleccionables: línea recta, arco, zigzag
- [ ] Partículas al recolectar (sparkle burst)
- [ ] Sonido satisfactorio al recoger
- [ ] Mate (🧉) y Medialunas (🥐) como coleccionables especiales (más puntos)

#### 2.3 Detección de Colisiones
- [ ] Sistema AABB optimizado para 3D
- [ ] Solo testear obstáculos cercanos al jugador (spatial optimization)
- [ ] Hit zones ajustables por tipo de obstáculo
- [ ] Callback system: `onCollide(obstacle)` → game over o power-up

#### 2.4 Sistema de Puntuación
- [ ] Score base por distancia recorrida
- [ ] Bonus por coleccionables (conchas = 1, especiales = 5)
- [ ] Multiplicador que sube con racha de coleccionables
- [ ] High score persistido en localStorage
- [ ] Animación de score en HUD (count-up rápido)

#### 2.5 Game Over
- [ ] Animación de crash del personaje (tropezar, caer)
- [ ] Cámara slowmo + zoom al impacto
- [ ] Pantalla de resultados: distancia, monedas, score total
- [ ] Comparación con high score
- [ ] Botón de reinicio con transición

---

### FASE 3 — Visual Polish (Semanas 5-6)

**Objetivo:** Que el juego se vea profesional y atractivo.

#### 3.1 Modelos 3D
- [ ] Personaje surfer con modelo low-poly estilizado (GLB)
- [ ] Animaciones del personaje:
  - `idle` → pose de correr/surfear
  - `jump` → salto con brazos arriba
  - `slide` → agachado / deslizamiento
  - `crash` → tropezón y caída
  - `celebrate` → al romper high score
- [ ] Modelos de obstáculos temáticos (low-poly con texturas baked)
- [ ] Tabla de surf visible como accesorio

#### 3.2 Ambiente y Escenario
- [ ] Skybox con gradiente de atardecer/día (cubemap o shader)
- [ ] Océano con shader animado (ondas sinusoidales + foam)
- [ ] Arena con normal maps para detalle
- [ ] Vegetación al costado del track (palmeras, pastos, arbustos)
- [ ] Elementos decorativos de playa (sombrillas, toallas, castillos de arena)
- [ ] Fog volumétrico para profundidad

#### 3.3 Efectos Visuales (VFX)
- [ ] Partículas de arena al correr
- [ ] Spray de agua al surfear cerca del mar
- [ ] Sparkles al recoger coleccionables
- [ ] Screen shake al chocar
- [ ] Flash blanco al activar power-up
- [ ] Trail/estela detrás del personaje
- [ ] Sombra dinámica del personaje en la arena

#### 3.4 Cámara Cinemática
- [ ] Cámara que sigue al jugador con smooth follow (lerp)
- [ ] Ligero tilt al cambiar de carril
- [ ] Zoom out progresivo al aumentar velocidad
- [ ] Cámara dramática en game over (orbita lenta)
- [ ] FOV dinámico (se amplía con la velocidad → sensación de speed)

---

### FASE 4 — Audio y Feedback (Semana 7)

**Objetivo:** Sonido inmersivo que refuerce cada acción del jugador.

#### 4.1 Música
- [ ] Track principal loopeable (estilo surf rock / tropical chill)
- [ ] Pitch/tempo sube con la velocidad del juego
- [ ] Música de menú diferente (más relajada)
- [ ] Fade in/out entre tracks
- [ ] Sistema de capas musicales (base + intensidad)

#### 4.2 Efectos de Sonido
- [ ] Salto (whoosh)
- [ ] Aterrizaje (thud suave en arena)
- [ ] Slide/deslizamiento (swoosh)
- [ ] Recoger moneda (ding metálico / campanita)
- [ ] Recoger item especial (sonido más elaborado, powerup-like)
- [ ] Colisión/crash (impacto + gruñido cómico)
- [ ] Cambio de carril (swoosh rápido)
- [ ] Activar power-up (sonido ascendente épico)
- [ ] New high score (fanfarria corta)
- [ ] Botón hover/click UI (click sutil)

#### 4.3 Feedback Háptico (mobile)
- [ ] Vibración corta al chocar
- [ ] Vibración sutil al recoger items
- [ ] Usar `navigator.vibrate()` con fallback

---

### FASE 5 — Power-ups y Mecánicas Avanzadas (Semanas 8-9)

**Objetivo:** Profundidad de gameplay con power-ups y mecánicas que mantienen al jugador enganchado.

#### 5.1 Power-ups
- [ ] **Imán de monedas**: Atrae monedas cercanas automáticamente (10s)
- [ ] **Escudo/Tabla Mágica**: Absorbe un impacto sin morir (1 uso)
- [ ] **Multiplicador x2**: Duplica puntos durante 15 segundos
- [ ] **Mega Ola**: Surf sobre una ola gigante, invencible por 8 segundos, recolecta todo
- [ ] **Slow Motion**: Reduce velocidad del mundo por 5 segundos
- [ ] Sistema visual: ícono activo en HUD + timer + aura en personaje
- [ ] Spawning balanceado (más raro = más poderoso)

#### 5.2 Deslizamiento (Slide)
- [ ] Swipe abajo → personaje se agacha/desliza
- [ ] Duración limitada (1 segundo) o mientras mantiene el swipe
- [ ] Pasa por debajo de obstáculos altos
- [ ] Animación de slide dedicada
- [ ] Partículas de arena al deslizarse

#### 5.3 Combos y Multiplicadores
- [ ] Recoger items consecutivos sin fallar → combo counter
- [ ] Combo x5 → multiplicador x2
- [ ] Combo x15 → multiplicador x3
- [ ] Visual feedback: número de combo flota en pantalla
- [ ] Sonido ascendente con cada nivel de combo
- [ ] El combo se rompe si pasas 3 segundos sin recoger nada

#### 5.4 Patrones de Nivel
- [ ] Definir "secciones" prediseñadas que se intercalan con random
- [ ] Secciones temáticas: "campo de rocas", "pasillo de monedas", "slalom de sombrillas"
- [ ] Rampas que dan salto extra
- [ ] Secciones de bonus (muchas monedas, sin obstáculos, tiempo limitado)

---

### FASE 6 — Meta-game y Progresión (Semanas 10-11)

**Objetivo:** Razones para volver a jugar. Progresión, desbloqueo, personalización.

#### 6.1 Sistema de Monedas/Economía
- [ ] Monedas persistidas entre partidas (localStorage / IndexedDB)
- [ ] Monedas → desbloquear personajes y tablas
- [ ] Precios balanceados para 5-20 partidas por desbloqueo

#### 6.2 Personajes Desbloqueables
- [ ] **Surfer Clásico** (default, gratis)
- [ ] **Surfer de Chapadmalal** (con mate en mano)
- [ ] **Pingüino Surfista** 🐧 (skin cómica)
- [ ] **Lobo Marino Amigable** 🦭 (ironía: el obstáculo es ahora el héroe)
- [ ] Cada personaje con modelo y animaciones propias
- [ ] Preview 3D en la tienda (rotación con drag)

#### 6.3 Tablas de Surf
- [ ] Tablas cosméticas con diferentes diseños
- [ ] Colores y patterns (madera, neón, argentina flag, etc.)
- [ ] Se ve durante el gameplay

#### 6.4 Misiones/Logros
- [ ] Misiones diarias rotativas (ej: "Recolectá 50 mates en una partida")
- [ ] Logros permanentes:
  - "Primer Wipeout" → Chocá por primera vez
  - "Maradoniano" → Alcanzá 10,000 puntos
  - "Rey del Mate" → Recolectá 100 mates totales
  - "Velocidad Rayo" → Sobreviví 2 minutos
  - "Coleccionista" → Desbloqueá todos los personajes
- [ ] Notificación in-game al completar un logro
- [ ] Pantalla de logros con progreso

#### 6.5 Leaderboard Local
- [ ] Top 10 scores guardados localmente
- [ ] Nombre/alias del jugador
- [ ] Pantalla de ranking accesible desde menú

---

### FASE 7 — Zonas y Variedad (Semana 12)

**Objetivo:** Mantener el juego fresco con cambios de escenario durante la partida.

#### 7.1 Zonas Temáticas
Cada zona cambia la estética pero mantiene la mecánica core:

| Zona | Ambiente | Obstáculos Únicos | Color Dominante |
|---|---|---|---|
| **Playa de Chapadmalal** | Arena, mar, palmeras | Lobos marinos, rocas, sombrillas | Celeste/Beige |
| **Rambla de Mar del Plata** | Rambla urbana, edificios | Bancos, bicicletas, puestos de churros | Gris/Naranja |
| **Bosque de Cariló** | Pinos, sombras, naturaleza | Troncos, ciervos, raíces | Verde oscuro |
| **Ruta Costera** | Asfalto, campo, atardecer | Autos, carteles, guardias | Naranja/Violeta |

#### 7.2 Transiciones entre Zonas
- [ ] Cada ~500m de distancia, transición a nueva zona
- [ ] Transición visual gradual (crossfade de ambiente, 3-5 segundos)
- [ ] Cambio de música a la variante de la zona
- [ ] Indicador en pantalla: "Entrando a: Rambla de Mar del Plata"
- [ ] Los obstáculos y decoración cambian progresivamente

---

### FASE 8 — Optimización y Performance (Semana 13)

**Objetivo:** 60 FPS estables en dispositivos móviles de gama media.

#### 8.1 Rendering
- [ ] LOD (Level of Detail) para modelos según distancia
- [ ] Frustum culling (no renderizar lo que no se ve)
- [ ] Instanced rendering para objetos repetidos (monedas, vegetación)
- [ ] Texture atlasing (combinar texturas en una)
- [ ] Compresión de texturas (Basis/KTX2)
- [ ] Shadow maps de baja resolución o baked shadows

#### 8.2 Gameplay
- [ ] Object pooling para todo (obstáculos, monedas, partículas, sonidos)
- [ ] Solo procesar entidades dentro del rango visible
- [ ] Garbage collection minimizado (evitar crear objetos en el loop)
- [ ] Web Workers para cálculos pesados si es necesario

#### 8.3 Loading
- [ ] Pantalla de carga con progress bar real
- [ ] Lazy loading de assets por zona (no cargar todo al inicio)
- [ ] Precarga de la siguiente zona antes de la transición
- [ ] Assets comprimidos con Draco (modelos) y WebP/AVIF (texturas)
- [ ] Service Worker para cache offline (PWA)

#### 8.4 Adaptabilidad
- [ ] Detección de capacidad del dispositivo al inicio
- [ ] Presets de calidad: Bajo / Medio / Alto / Ultra
  - **Bajo**: Sin sombras, partículas reducidas, vegetación mínima
  - **Medio**: Sombras simples, partículas normales
  - **Alto**: Sombras suaves, todos los VFX, post-processing
  - **Ultra**: Todo + anti-aliasing MSAA + motion blur
- [ ] Auto-detect basado en FPS de los primeros 5 segundos

---

### FASE 9 — PWA y Distribución (Semana 14)

**Objetivo:** Que el juego se instale como app nativa y funcione offline.

#### 9.1 Progressive Web App
- [ ] `manifest.json` con nombre, íconos, colores
- [ ] Service Worker con cache de assets y offline support
- [ ] Splash screen nativa en iOS/Android
- [ ] Pantalla completa (fullscreen API + manifest display: standalone)
- [ ] Orientación forzada a portrait (o soporte landscape)

#### 9.2 Meta Tags y SEO
- [ ] Open Graph tags para compartir en redes
- [ ] Twitter Card con screenshot del juego
- [ ] Favicon y Apple Touch Icons

#### 9.3 Analytics (opcional)
- [ ] Eventos básicos: inicio de partida, game over, score, tiempo de sesión
- [ ] Privacy-first: sin cookies, datos agregados
- [ ] Plausible Analytics o similar (lightweight)

---

### FASE 10 — Pulido Final y Launch (Semana 15)

#### 10.1 Tutorial
- [ ] Primera partida guiada: "Deslizá hacia arriba para saltar"
- [ ] Indicadores visuales (flechas, highlights) en los primeros obstáculos
- [ ] Se muestra solo la primera vez (flag en localStorage)

#### 10.2 Accesibilidad
- [ ] Contraste suficiente en toda la UI
- [ ] Opción para reducir movimiento (animaciones simplificadas)
- [ ] Soporte para screen readers en menús
- [ ] Indicadores visuales además de sonoros

#### 10.3 Testing
- [ ] Unit tests para lógica de gameplay (puntuación, colisiones, power-ups)
- [ ] E2E tests con Playwright (flujo completo: inicio → jugar → game over → reinicio)
- [ ] Testing en dispositivos reales: iOS Safari, Android Chrome, Desktop
- [ ] Performance profiling con Chrome DevTools
- [ ] Memory leak testing (jugar 30+ minutos sin degradación)

#### 10.4 Launch Checklist
- [ ] Build de producción optimizado (`vite build`)
- [ ] Assets minificados y comprimidos
- [ ] HTTPS habilitado
- [ ] Fallback para WebGL no soportado
- [ ] Error boundary global con pantalla amigable
- [ ] README actualizado con screenshots y demo link

---

## Controles

### Mobile (Touch)
| Gesto | Acción |
|---|---|
| Swipe ↑ | Saltar |
| Swipe ↓ | Deslizarse |
| Swipe ← | Carril izquierdo |
| Swipe → | Carril derecho |
| Tap | Saltar (alternativo) |

### Desktop (Teclado)
| Tecla | Acción |
|---|---|
| ↑ / W / Espacio | Saltar |
| ↓ / S | Deslizarse |
| ← / A | Carril izquierdo |
| → / D | Carril derecho |
| Esc / P | Pausar |

---

## Modelo de la Cámara

```
        Cámara (perspectiva 60° FOV)
           \  ángulo ~25° hacia abajo
            \
             \        ← dirección de movimiento
              \
    [carril1] [PLAYER] [carril3]
    ─────────────────────────────────
              TRACK (arena)
    ─────────────────────────────────
              OCÉANO (shader)
```

La cámara sigue al jugador con offset fijo (`y: +5, z: -10`), con smooth follow usando lerp. Se inclina levemente al cambiar de carril para dar sensación de movimiento.

---

## Estimación de Assets Necesarios

| Categoría | Cantidad | Formato | Peso estimado |
|---|---|---|---|
| Personajes (con animaciones) | 4-5 | GLB (Draco) | ~2-4 MB total |
| Obstáculos | 10-15 modelos | GLB (Draco) | ~1-2 MB total |
| Tablas de surf | 5-8 | GLB | ~0.5 MB total |
| Texturas (arena, agua, cielo, etc.) | 15-20 | WebP/KTX2 | ~3-5 MB total |
| Música (3-4 tracks) | 3-4 | OGG/MP3 | ~4-6 MB total |
| SFX | 15-20 | OGG/MP3 | ~0.5 MB total |
| Fuentes | 1-2 | WOFF2 | ~0.1 MB |
| **Total estimado** | | | **~12-18 MB** |

---

## Prioridades de Implementación

Si hay que recortar scope, este es el orden de prioridad:

1. **MUST HAVE** (Fases 1-2): 3D runner funcional con obstáculos, salto, carriles, coleccionables, game over
2. **SHOULD HAVE** (Fases 3-4): Modelos 3D reales, ambiente pulido, audio completo
3. **NICE TO HAVE** (Fases 5-6): Power-ups, personajes desbloqueables, misiones
4. **BONUS** (Fases 7-10): Zonas múltiples, PWA, analytics, tutorial guiado

---

## Referencias Visuales

Juegos de referencia para la estética y mecánicas:
- **Subway Surfers** — Sistema de carriles, power-ups, monedas, meta-game
- **Temple Run** — Cámara en tercera persona, swipe controls
- **Alto's Odyssey** — Estética minimalista y atmosférica
- **Crossy Road** — Low-poly style, monetización justa, personajes desbloqueables

---

*Plan creado: Febrero 2026*
*Proyecto: SurfTrip — De la playa de Chapadmalal al mundo* 🏄‍♂️
