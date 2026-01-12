"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-midnight-blue/30 via-deep-black to-deep-black" />
        <div className="w-full h-full bg-gradient-to-br from-graphite via-dark-brown/50 to-midnight-blue opacity-60" />
      </div>

      {/* Organic light blobs - not tech particles */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-[15%] left-[10%] w-[700px] h-[400px] bg-midnight-blue/20 rounded-[40%] blur-[150px] animate-pulse opacity-70" style={{ animationDuration: '12s' }} />
        <div className="absolute bottom-[20%] right-[15%] w-[500px] h-[600px] bg-dark-brown/15 rounded-[50%] blur-[130px] animate-pulse opacity-60" style={{ animationDuration: '15s', animationDelay: '3s' }} />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
        {/* Decorative top line */}
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mb-8 animate-fade-in" />

        <h1 className="relative text-7xl md:text-9xl font-light tracking-[0.2em] mb-8 animate-fade-in">
          <span className="relative block text-white text-glow">
            <span className="block" style={{ letterSpacing: '0.18em' }}>PEDRO</span>
            <span className="block opacity-85" style={{ letterSpacing: '0.22em' }}>CAVVE</span>
          </span>
        </h1>

        <p
          className="text-lg md:text-xl text-white/60 font-light tracking-wide mb-14 animate-fade-in max-w-2xl mx-auto leading-relaxed"
          style={{ animationDelay: '300ms' }}
        >
          Som noturno, íntimo e emocional
        </p>

        {/* Subtle invitation CTA */}
        <a
          href="#music"
          className="group relative inline-block text-sm tracking-[0.25em] text-white/50 hover:text-white/80 transition-all duration-700 animate-fade-in border-b border-white/20 hover:border-white/40 pb-1"
          style={{ animationDelay: '600ms' }}
        >
          Entrar no som
        </a>

        {/* Decorative bottom line */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mt-16 animate-fade-in" style={{ animationDelay: '900ms' }} />      </div>
    </section>
  );
}
