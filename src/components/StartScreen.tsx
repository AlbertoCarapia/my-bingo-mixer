interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 bg-gradient-to-b from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27] relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-[#ff006e] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 -right-32 w-96 h-96 bg-[#00f5ff] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-[#b537f2] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl">
        {/* Title with Glitch Effect */}
        <div className="mb-4">
          <h1 className="title-neon mb-2 animate-slide-in">BINGO</h1>
          <h1 className="title-neon text-[#00f5ff]">MIXER</h1>
        </div>

        {/* Subtitle */}
        <p className="subtitle-neon mb-12 animate-slide-in" style={{ animationDelay: '0.1s' }}>
          ⚡ Find Your People ⚡
        </p>

        {/* Rules Card with Neon Border */}
        <div className="bg-[#1a1f3a] border-2 border-[#b537f2] rounded-xl p-8 mb-12 shadow-lg glow-purple animate-bounce-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="font-mono text-xl font-bold text-[#00f5ff] mb-6 uppercase tracking-widest">
            How to Play
          </h2>

          <ul className="text-left text-[#e0e0e0] text-base space-y-4 font-sans">
            <li className="flex items-start">
              <span className="text-[#ff006e] font-bold mr-4 mt-1">▶</span>
              <span>Find people who match the questions on your card</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#ff006e] font-bold mr-4 mt-1">▶</span>
              <span>Tap a square when you find a match</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#ff006e] font-bold mr-4 mt-1">▶</span>
              <span>Get 5 in a row (horizontal, vertical, or diagonal) to WIN</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#00f5ff] font-bold mr-4 mt-1">⚡</span>
              <span className="text-[#00f5ff]">The center square is FREE - always marked!</span>
            </li>
          </ul>
        </div>

        {/* CTA Button */}
        <button
          onClick={onStart}
          className="w-full max-w-sm mx-auto block bg-[#ff006e] hover:bg-[#ff3b7a] text-white font-mono font-bold py-6 px-8 rounded-lg text-xl active:scale-95 transition-all duration-200 glow-magenta uppercase tracking-widest shadow-xl mb-6 animate-bounce-in"
          style={{ animationDelay: '0.3s' }}
        >
          ⚡ START GAME ⚡
        </button>

        {/* Secondary info */}
        <p className="text-[#00f5ff] text-sm font-mono uppercase tracking-wider opacity-70">
          ▲♦ Mix. Connect. Win ♦▲
        </p>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0e27] to-transparent pointer-events-none"></div>
    </div>
  );
}
