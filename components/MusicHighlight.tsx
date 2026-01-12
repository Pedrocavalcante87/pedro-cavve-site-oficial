"use client";

export default function MusicHighlight() {
  return (
    <section id="music" className="relative py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light tracking-wide text-white mb-4">
            Último Lançamento
          </h2>
          <div className="w-16 h-px bg-subtle-gray mx-auto" />
        </div>

        <div className="group relative bg-gradient-to-br from-graphite-light/60 via-graphite-light/40 to-graphite/60 rounded-2xl p-8 md:p-12 transition-all duration-700 animate-slide-up backdrop-blur-xl border border-white/10 hover:border-white/20 shadow-2xl hover:shadow-[0_0_80px_rgba(255,255,255,0.1)] overflow-hidden">
          {/* Animated border glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 3s ease-in-out infinite'
          }} />

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-white/10 rounded-tl-2xl opacity-50" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-white/10 rounded-br-2xl opacity-50" />

          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            {/* Album Cover */}
            <div className="relative group">
              {/* Glow effect behind */}
              <div className="absolute -inset-4 bg-gradient-to-br from-midnight-blue/40 to-dark-brown/40 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative aspect-square bg-gradient-to-br from-dark-brown via-graphite-light to-midnight-blue rounded-xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all duration-700 shadow-2xl">
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />

                {/* Single cover - Narcisista */}
                <img
                  src="/narcisista-cover.jpg"
                  alt="Narcisista - Pedro Cavve"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />

                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 -translate-x-[200%] group-hover:translate-x-[200%] transition-all duration-1000 z-20" />
              </div>
            </div>

            {/* Song Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl md:text-4xl font-light text-white mb-2">
                  Narcisista
                </h3>
                <p className="text-subtle-gray text-lg">
                  Pedro Cavve
                </p>
              </div>

              <p className="text-subtle-gray leading-relaxed">
                Último lançamento de Pedro Cavve. Uma exploração sonora entre o R&B alternativo e o trap introspectivo, marcada pela produção atmosférica e letras que transitam entre vulnerabilidade e autoconhecimento.
              </p>

              <a
                href="https://open.spotify.com/intl-pt/track/3dc6Yp4IN3bGnTudhtZkF8?si=20c788f494e54da6"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn relative inline-flex items-center gap-3 bg-white text-deep-black px-10 py-4 rounded-lg font-medium tracking-wider hover:bg-white hover:scale-105 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-2xl"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                  Ouvir no Spotify
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
