"use client";

const platforms = [
  {
    name: "Spotify",
    url: "https://open.spotify.com/intl-pt/artist/1fjvTk7dg2iHiQhAwfWoEW?si=unkAAGneThm63ID4Z34MlA",
    description: "Singles, álbuns e faixas para a madrugada",
    cta: "Ouvir agora",
    accent: "#1db954",
    initial: "S",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@Pedrocavve/videos",
    description: "Visuais, clipes e o conceito por trás do som",
    cta: "Ver os visuais",
    accent: "#8b0000",
    initial: "Y",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/pedrocavve/",
    description: "Processo criativo, bastidores e vida real",
    cta: "Acompanhar de perto",
    accent: "#7b2cbf",
    initial: "I",
  },
];

export default function Platforms() {
  return (
    <section className="relative py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light tracking-wide text-white/90 mb-4">
            Onde o som continua
          </h2>
          <div className="w-16 h-px bg-white/20 mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {platforms.map((platform, index) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-graphite-light/50 via-graphite-light/30 to-graphite/50 hover:from-graphite-light/70 hover:via-graphite-light/50 hover:to-graphite/70 border border-white/10 rounded-2xl p-10 transition-all duration-700 animate-slide-up backdrop-blur-xl hover:shadow-[0_0_50px_rgba(255,255,255,0.1)] hover:scale-105 overflow-hidden"
              style={{
                animationDelay: `${index * 0.15}s`,
                ['--accent-color' as string]: platform.accent
              } as React.CSSProperties}
            >
              {/* Animated background with subtle accent */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: `radial-gradient(circle at 50% 120%, ${platform.accent}15 0%, transparent 70%)`
                }}
              />

              {/* Subtle accent border on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  boxShadow: `inset 0 0 0 1px ${platform.accent}15`
                }}
              />

              {/* Corner decorations */}
              <div className="absolute top-3 right-3 w-12 h-12 border-t border-r border-white/10 rounded-tr-2xl" />
              <div className="absolute bottom-3 left-3 w-12 h-12 border-b border-l border-white/10 rounded-bl-2xl" />

              <div className="relative z-10 text-center space-y-5">
                {/* Stylized initial */}
                <div className="w-12 h-12 mx-auto flex items-center justify-center">
                  <span
                    className="text-2xl font-light text-white/30 group-hover:text-white/50 transition-all duration-700"
                    style={{ letterSpacing: '0.05em' }}
                  >
                    {platform.initial}
                  </span>
                </div>

                <h3 className="text-2xl font-light text-white/90 tracking-[0.1em] group-hover:text-white transition-all duration-500 group-hover:tracking-[0.15em]">
                  {platform.name}
                </h3>

                <p className="text-subtle-gray/70 text-sm leading-relaxed group-hover:text-white/80 transition-all duration-500">
                  {platform.description}
                </p>

                <div className="pt-4">
                  <span className="inline-block text-white/40 group-hover:text-white/70 transition-all duration-500 text-xs tracking-[0.25em] font-light border-b border-white/20 group-hover:border-white/40 pb-1">
                    {platform.cta}
                  </span>
                </div>
              </div>

              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-1000" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
