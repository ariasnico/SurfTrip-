# CLAUDE.md

## Project Overview

SurfTrip is a 3D browser-based endless runner game built with TypeScript and Three.js. Themed around Argentine beach culture (Chapadmalal), players surf through a beach environment, dodge obstacles, collect items, and compete for high scores. The game is mobile-first with touch controls and haptic feedback.

## Tech Stack

- **Language**: TypeScript (strict mode)
- **3D Engine**: Three.js
- **Build Tool**: Vite 7
- **Animation**: GSAP
- **Audio**: Web Audio API (procedural synthesis, no audio files)
- **Deployment**: Vercel (static SPA), output to `docs/`

## Repository Structure

```
SurfTrip-/
├── surftrip-3d/          # Main game source (all dev work happens here)
│   ├── src/
│   │   ├── main.ts       # Entry point
│   │   ├── Game.ts       # Main game controller & state machine
│   │   ├── core/         # Engine systems (scene, input, audio, events)
│   │   ├── gameplay/     # Game mechanics (player, obstacles, collectibles, scoring)
│   │   ├── world/        # Environment visuals (ocean, sky, beach, models)
│   │   ├── vfx/          # Visual effects (particles, trails, screen shake)
│   │   └── utils/        # Utilities (math helpers, object pooling)
│   ├── index.html        # HTML template with embedded CSS and game UI
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
├── docs/                 # Built output (committed for deployment)
├── plan.md               # Development roadmap (15 phases)
├── vercel.json           # Vercel deployment config
└── index.html            # Root redirect to docs/
```

## Build & Development Commands

All commands run from `surftrip-3d/`:

```bash
cd surftrip-3d

# Install dependencies
npm install

# Start dev server with hot reload
npm run dev

# Type-check and build for production (output to ../docs/)
npm run build

# Preview production build locally
npm run preview
```

The build command runs `tsc && vite build` -- TypeScript compilation must pass before Vite bundles the output.

## Path Aliases

Both `tsconfig.json` and `vite.config.ts` define these import aliases:

| Alias | Maps to |
|-------|---------|
| `@core/*` | `src/core/*` |
| `@gameplay/*` | `src/gameplay/*` |
| `@world/*` | `src/world/*` |
| `@vfx/*` | `src/vfx/*` |
| `@ui/*` | `src/ui/*` |
| `@data/*` | `src/data/*` |
| `@utils/*` | `src/utils/*` |

Always use these aliases for imports rather than relative paths.

## Architecture

### Game State Machine

The `Game` class (`Game.ts`) manages three states: `'menu' | 'playing' | 'gameover'`. It orchestrates all subsystems and runs the main `requestAnimationFrame` loop.

### System Layers

1. **Core** (`src/core/`) -- Engine-level services
   - `SceneManager`: Three.js renderer, camera, lighting
   - `InputManager`: Touch swipe detection + keyboard input
   - `AudioManager`: Procedural sound synthesis via Web Audio API
   - `EventBus`: Pub/sub for decoupled inter-system communication

2. **Gameplay** (`src/gameplay/`) -- Game mechanics
   - `Player`: Character model, states (running/jumping/sliding/dead), movement
   - `TrackManager`: Infinite track via chunk recycling
   - `LaneSystem`: 3-lane positioning constants
   - `ObstacleSpawner`: Dynamic obstacle generation
   - `CollectibleSystem`: Item spawning with object pooling
   - `ScoreManager`: Points, distance scoring, localStorage persistence
   - `DifficultyManager`: Progressive speed increase over time

3. **World** (`src/world/`) -- Visual environment
   - `Environment`: Orchestrates all world elements
   - `Ocean`: Animated ocean with custom shader
   - `Sky`: Gradient sky, clouds, seagulls
   - `BeachDecor`: Decorative props (umbrellas, parrilla, mate, flags)
   - `PalmTree`, `SurferModel`, `ObstacleModels`: Procedural 3D models

4. **VFX** (`src/vfx/`) -- Visual effects
   - `ParticleSystem`: Burst effects for collection/crashes
   - `SandTrail`: Continuous dust trail behind player
   - `ScreenEffects`: Screen shake on impact

5. **Utils** (`src/utils/`) -- Shared utilities
   - `MathUtils`: lerp, clamp, random range helpers
   - `ObjectPool`: Generic object pooling for performance

### Communication Pattern

Systems communicate through the `EventBus` singleton (pub/sub pattern). Input events are published by `InputManager` and consumed by `Player` and `Game`. Avoid direct cross-system coupling.

### Collision Detection

AABB-based collision with spatial filtering (only checks obstacles near the player). Player hitbox varies by state (shorter when sliding). Obstacles store custom hitbox dimensions in `mesh.userData`.

## Code Conventions

- **TypeScript strict mode** is enforced: no unused locals, no unused parameters, no fallthrough in switch cases
- **No linter or formatter** is configured beyond TypeScript strict checks
- **All 3D models are procedural** -- built from Three.js primitives, no external model files
- **All audio is synthesized** -- Web Audio API generates sounds at runtime, no audio files
- **UI is embedded in `index.html`** -- CSS is inline, UI elements are manipulated via DOM in TypeScript
- **Spanish language** in UI text (game is Argentine-themed)
- **Dispose pattern**: All systems implement a `dispose()` method to clean up Three.js resources and event listeners
- **Object pooling** is used for frequently created/destroyed objects (particles, collectibles)
- **Constants** are defined at the top of each file or in dedicated system files (e.g., `LaneSystem` for lane positions)

## Key Gameplay Constants

| Constant | Value | Location |
|----------|-------|----------|
| `GRAVITY` | 25 | `Player.ts` |
| `JUMP_FORCE` | 11 | `Player.ts` |
| `BASE_SPEED` | 12 | `DifficultyManager.ts` |
| `MAX_SPEED` | 30 | `DifficultyManager.ts` |
| `RAMP_RATE` | 0.15 | `DifficultyManager.ts` |
| `SWIPE_THRESHOLD` | 30px | `InputManager.ts` |
| `SWIPE_TIME_LIMIT` | 300ms | `InputManager.ts` |
| `BASE_FOV` | 60 | `Game.ts` |

## Testing

No testing framework is currently configured. Testing with Vitest + Playwright is planned for Phase 10 (see `plan.md`).

To verify changes, run the TypeScript compiler:

```bash
cd surftrip-3d && npx tsc --noEmit
```

## Deployment

- **Vercel** deploys from the repo root
- Build command: `cd surftrip-3d && npm install && npm run build`
- Output directory: `docs/`
- The `docs/` directory is committed to the repo for GitHub Pages compatibility
- After building, commit the updated `docs/` directory

## Development Status

Phases 1-4 are complete (core game loop, environment, VFX, audio). See `plan.md` for the full 15-phase roadmap and current progress.

## Important Notes

- The game is **mobile-first** -- always test touch input and responsive layout
- **Performance matters** -- use object pooling, avoid allocations in the game loop, recycle Three.js geometries
- **No external assets** -- everything is procedurally generated (models, textures, audio)
- **localStorage** key `surftrip3d_hiscore` stores the high score
- Delta time is capped at 0.05s in the game loop to prevent physics issues on slow frames
