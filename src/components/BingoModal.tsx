interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-hidden">
      {/* Animated background orbs inside modal */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#ff006e] rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#00f5ff] rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-[#b537f2] rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse"></div>
      </div>

      {/* Modal content */}
      <div className="relative z-10 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] border-2 border-[#ff006e] rounded-2xl p-8 max-w-xs w-full text-center shadow-2xl glow-magenta animate-bounce-in">
        {/* Glitch text animation */}
        <div className="mb-6 relative">
          <div className="text-6xl mb-4 animate-bounce">🎮</div>
          <h2 className="title-neon text-4xl mb-4 uppercase">BINGO!</h2>
          <div className="text-3xl font-mono text-[#00f5ff] uppercase tracking-widest font-bold">
            WINNER
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-[#00f5ff] text-lg mb-2 font-mono uppercase tracking-wider">
          ⚡ You completed a line! ⚡
        </p>

        <p className="text-[#b537f2] text-sm mb-8 font-sans">
          Amazing! You've proven you can connect with people who share your interests.
        </p>

        {/* Action Button */}
        <button
          onClick={onDismiss}
          className="w-full bg-[#00f5ff] hover:bg-[#33ffff] text-[#0a0e27] font-mono font-bold py-4 px-6 rounded-lg active:scale-95 transition-all duration-200 uppercase tracking-widest shadow-lg mb-4 glow-cyan"
        >
          ⚡ KEEP PLAYING ⚡
        </button>

        {/* Stats or secondary action */}
        <p className="text-[#e0e0e0]/60 text-xs font-mono uppercase tracking-wider">
          Press to continue • Mix more people!
        </p>
      </div>

      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#ff006e]/10 to-transparent pointer-events-none"></div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#00f5ff]/10 to-transparent pointer-events-none"></div>
    </div>
  );
}
