# Bingo Mixer – AI Assistant Guidelines

## Code Style

This project uses **TypeScript 5.9 with strict mode** (`strict: true`, `noUnusedLocals`, `noUnusedParameters`). Every expression must be fully typed.

- **React 19** with functional components and hooks
- **Tailwind CSS 4** (via `@tailwindcss/vite` plugin) – apply styles directly to `className` attributes
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
- **GitHub Pages**: Builds automatically on push to `main`; repo-aware base path via `VITE_REPO_NAME` env var

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

### Tailwind Colors
- **Custom colors defined in `index.css`**:
  - `.marked` class = green marked squares
  - `.accent` class = primary button color
  - `.accent-light` = hover state
- Use Tailwind utilities (`bg-gray-50`, `border-gray-200`, etc.) for standard colors

### Free Space Behavior
- Cannot be toggled (disabled button)
- Always `isMarked: true`
- Included in winning line detection (contributes to row/column/diagonal)
- Text is "FREE SPACE" (constant from questions.ts)

## Workshop & Documentation

See [workshop/ folder](../../workshop/GUIDE.md) for educational lab guides:
- **00-overview**: Checklist & architecture intro
- **01-setup**: Context engineering walkthrough
- **02-design**: Design-first frontend techniques
- **03-quiz-master**: Custom quiz master pattern
- **04-multi-agent**: Multi-agent development

Also see [Contributing](../../CONTRIBUTING.md) for code of conduct and CLA.

---

**When adding features**: Keep game logic pure (test first), props explicit (no implicit any), state immutable, and docs linked (not duplicated).
