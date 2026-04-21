# Bingo Mixer – AI Assistant Guidelines

## Overview
Bingo Mixer is a **social bingo game with a Cyberpunk Neon aesthetic**. Players find people matching questions on their card and get 5 in a row to win!

**Current Design**: High-energy Cyberpunk Neon with vibrant magenta/cyan glows and smooth animations.

## Code Style

This project uses **TypeScript 5.9 with strict mode** (`strict: true`, `noUnusedLocals`, `noUnusedParameters`). Every expression must be fully typed.

- **React 19** with functional components and hooks
- **Tailwind CSS 4** (via `@tailwindcss/vite` plugin) + custom CSS `@theme` variables
- **Immutability pattern**: All state updates create new objects/arrays, never mutate original state
- **Props interfaces**: Every component defines explicit prop types; no implicit `any` types

Example component:
```tsx
interface GameScreenProps {
  board: BingoSquareData[];
  onSquareClick: (squareId: number) => void;
}

export function GameScreen({ board, onSquareClick }: GameScreenProps) {
  return <div>...</div>;
}
```

## Architecture

**Core principle**: Separate pure game logic from React components.

- **Game Logic** (`src/utils/bingoLogic.ts`): Pure functions that manage board state, bingo detection, square toggling
  - `generateBoard()` – creates fresh 5×5 board with shuffled questions, center free space always marked
  - `toggleSquare(board, id)` – returns new board with square toggled (never mutates)
  - `checkBingo(board)` – detects winning rows/columns/diagonals, returns `BingoLine | null`
- **State Hook** (`src/hooks/useBingoGame.ts`): Manages game state (start/playing/bingo), localStorage persistence, modal visibility
  - Uses localStorage with version checking and validation
- **Components**:
  - `StartScreen` – entry point with play instructions
  - `GameScreen` – main game interface with header, board, bingo indicator
  - `BingoBoard` – 5×5 grid container
  - `BingoSquare` – single toggleable square with marked/winning state
  - `BingoModal` – celebratory modal shown on bingo
- **Types** (`src/types/index.ts`): Central export for `BingoSquareData`, `BingoLine`, `GameState`

**Why**: The separation enables thorough testing of game logic independently (41 tests pass), making features easier to modify and verify.

## Build and Test

```bash
npm run dev       # Start Vite dev server (http://localhost:5173)
npm run build     # Compile TS + bundle for production
npm run lint      # ESLint check (strict config, no auto-fix)
npm run test      # Run Vitest suite (41 tests in bingoLogic.test.ts)
```

- **Vite 8** configured for React with JSX transform
- **Vitest** uses jsdom environment + React Testing Library matchers
- **GitHub Pages**: Builds automatically on push to `main`; deployed to `https://albertocarapia.github.io/my-bingo-mixer/game/`

## Conventions & Common Patterns

### Bingo Board Layout
- **5×5 grid** = 25 squares (indices 0–24)
- **Center free space** at index 12 (row 2, col 2) – always marked, cannot be toggled
- **24 questions** randomly shuffled from `src/data/questions.ts` pool

### Winning Lines
- **5 rows**: any complete horizontal line
- **5 columns**: any complete vertical line
- **2 diagonals**: top-left→bottom-right, top-right→bottom-left

### State Persistence
- Game state saved to `localStorage` under key `'bingo-game-state'`
- Includes validation (version, array length, square schema) to prevent data corruption
- Fails safely; corrupted data falls back to fresh start

## Design System (Cyberpunk Neon)

### Color Palette
| Color | Hex | Use |
|-------|-----|-----|
| Magenta Neon | `#ff006e` | Primary interactive, highlights |
| Cyan Electric | `#00f5ff` | Secondary, accents, glow |
| Purple Neon | `#b537f2` | Borders, depth |
| Dark BG | `#0a0e27` | Main background |
| Dark Surface | `#1a1f3a` | Cards, elevated surfaces |
| White | `#ffffff` | Primary text |

### Typography
- **Titles**: `Space Mono` 700, uppercase, tracking-widest
- **Body**: `Inter` 400-500, normal case
- **Buttons**: `Space Mono` bold, uppercase, tracking-widest

### Key Effects
- ✨ **Glow**: Magenta for primary, Cyan for secondary (box-shadow with 20px blur)
- 🌊 **Animations**: `neon-glow` (2s), `cyan-pulse` (2s), `slide-in-top` (0.6s), `bounce-in` (0.4s)
- 🎬 **Stagger**: Use `animationDelay` for sequential reveals
- 💫 **Gradients**: `from-[#ff006e] to-[#b537f2]` for depth

📖 **See**: [.github/instructions/design-guide-cyberpunk.instructions.md](.github/instructions/design-guide-cyberpunk.instructions.md) for complete design reference.

## Workshop & Documentation

See [workshop/ folder](../../workshop/GUIDE.md) for educational lab guides:
- **00-overview**: Checklist & architecture intro
- **01-setup**: Context engineering walkthrough
- **02-design**: Design-first frontend techniques
- **03-quiz-master**: Custom quiz master pattern
- **04-multi-agent**: Multi-agent development

Also see [Contributing](../../CONTRIBUTING.md) for code of conduct and CLA.

---

**When adding features**:
- Keep game logic pure (test first)
- Props explicit (no implicit any)
- State immutable
- Follow design system (Cyberpunk Neon palette)
- Reference docs instead of duplicating
- Add/update instructions if patterns change

**AI Assistant Tips**:
- Use Design Guide instructions when styling components (`applyTo: src/components/**/*.tsx`)
- Reference Tailwind 4 instructions for CSS features
- Follow frontend-design instructions for avoiding generic AI aesthetics
- Test all changes with lint + build before proposing
