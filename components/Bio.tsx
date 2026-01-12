"use client";

export default function Bio() {
  return (
    <section className="relative py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image Side */}
          <div className="relative group animate-slide-up">
            {/* Animated outer glow */}
            <div className="absolute -inset-8 bg-gradient-to-br from-midnight-blue/40 via-dark-brown/30 to-accent-gray/20 rounded-3xl blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" style={{ animationDuration: '6s' }} />

            {/* Border frame */}
            <div className="relative">
              <div className="absolute -inset-4 border border-white/10 rounded-2xl" />
              <div className="absolute -inset-2 border border-white/5 rounded-2xl" />

              <div className="relative aspect-square bg-gradient-to-br from-midnight-blue/50 via-graphite-light to-dark-brown/50 rounded-xl overflow-hidden border border-white/20 shadow-2xl">
                {/* Artist portrait */}
                <img
                  src="/pedro-cavve-photo.jpg"
                  alt="Pedro Cavve"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback se imagem não carregar
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />

                {/* Overlay pattern */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)',
                }} />

                {/* Shimmer overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-1500" />
              </div>

              {/* Corner accents */}
              <div className="absolute -top-2 -left-2 w-16 h-16 border-t-2 border-l-2 border-white/30 rounded-tl-xl" />
              <div className="absolute -bottom-2 -right-2 w-16 h-16 border-b-2 border-r-2 border-white/30 rounded-br-xl" />
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <h2 className="text-4xl md:text-5xl font-light tracking-wide text-white/95">
              Sobre
            </h2>

            <div className="space-y-4 text-subtle-gray/80 text-lg leading-relaxed">
              <p>
                Pedro Cavve é produtor musical, cantor e rapper, atuando no cenário do R&B alternativo e do trap introspectivo, com uma proposta artística marcada por sensibilidade, estética urbana e profundidade emocional. Sua trajetória na música começou em 2018, nas batalhas de rima, onde construiu base lírica, identidade artística e presença de palco.
              </p>

              <p>
                O início profissional aconteceu ao lado da 3R Music Records, com o lançamento de singles exclusivos pelo canal da gravadora. Em 2019, Pedro criou o Soul Mob, um projeto coletivo voltado ao R&B e ao trap, em parceria com a 102 Criações, período em que lançou músicas marcantes como &quot;Vestígios&quot; e &quot;Lingerie Vermelha&quot;, consolidando sua assinatura sonora.
              </p>

              <p>
                Em 2022, deu início à sua carreira solo e passou a atuar como artista independente, ampliando sua liberdade criativa. Pedro Cavve transita entre diferentes gêneros e atmosferas musicais, explorando fusões e referências contemporâneas, como na faixa &quot;t.o.t&quot;, em colaboração com Maciel Miller, reforçando sua versatilidade como artista e produtor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
