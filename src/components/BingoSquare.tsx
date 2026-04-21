import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-2 text-center border-2 rounded transition-all duration-150 select-none min-h-[70px] text-xs leading-tight font-sans font-medium cursor-pointer';

  // Unmarked: Dark background with cyan border
  // Marked: Glowing magenta with animation
  // Winning: Extra glow effect
  const stateClasses = square.isMarked
    ? isWinning
      ? 'bg-gradient-to-br from-[#ff006e] to-[#b537f2] border-[#00f5ff] text-[#ffffff] glow-cyan animate-pulse shadow-2xl'
      : 'bg-gradient-to-br from-[#ff006e]/20 to-[#b537f2]/20 border-[#ff006e] text-[#00f5ff] glow-magenta'
    : 'bg-[#1a1f3a]/50 border-[#00f5ff]/30 text-[#e0e0e0] hover:border-[#00f5ff] hover:bg-[#1a1f3a] hover:shadow-lg';

  const freeSpaceClasses = square.isFreeSpace ? 'font-bold text-sm text-[#ff006e] uppercase tracking-wider' : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses} backdrop-blur-sm`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="break-words hyphens-auto">{square.text}</span>
      
      {/* Checkmark indicator */}
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-1 right-1 text-[#00f5ff] text-lg animate-bounce">✓</span>
      )}

      {/* Winning glow pulse */}
      {isWinning && (
        <span className="absolute inset-0 rounded border-2 border-[#00f5ff] animate-pulse opacity-50"></span>
      )}
    </button>
  );
}
