import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full bg-gradient-to-b from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#ff006e] rounded-full mix-blend-multiply filter blur-3xl opacity-5 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00f5ff] rounded-full mix-blend-multiply filter blur-3xl opacity-5 -z-10"></div>

      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-[#1a1f3a]/50 backdrop-blur-md border-b border-[#b537f2]/30 z-20">
        <button
          onClick={onReset}
          className="text-[#00f5ff] hover:text-[#ff006e] px-4 py-2 rounded font-mono uppercase text-sm tracking-widest transition-all duration-200 hover:glow-magenta"
        >
          ← BACK
        </button>
        <h1 className="font-mono font-bold text-xl text-[#ff006e] uppercase tracking-widest">
          BINGO MIXER
        </h1>
        <div className="w-20"></div>
      </header>

      {/* Instructions */}
      <p className="text-center text-[#00f5ff]/70 text-sm py-3 px-4 font-mono uppercase tracking-wider">
        ⚡ Tap to mark • Get 5 in a row to WIN ⚡
      </p>

      {/* Bingo indicator with dramatic effect */}
      {hasBingo && (
        <div className="bg-gradient-to-r from-[#ff006e] via-[#b537f2] to-[#00f5ff] text-white text-center py-4 font-mono font-bold text-lg uppercase tracking-widest animate-pulse glow-magenta">
          🎮 BINGO! YOU GOT A LINE! 🎮
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-4">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0e27] to-transparent pointer-events-none"></div>
    </div>
  );
}
