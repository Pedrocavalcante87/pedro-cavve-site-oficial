"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 border-t border-accent-gray/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-subtle-gray text-sm">
            © {currentYear} Pedro Cavve. Todos os direitos reservados.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-8">
            <a
              href="https://www.instagram.com/pedrocavve/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-subtle-gray hover:text-white transition-colors text-sm tracking-wide"
            >
              Instagram
            </a>

            <a
              href="https://open.spotify.com/intl-pt/artist/1fjvTk7dg2iHiQhAwfWoEW?si=unkAAGneThm63ID4Z34MlA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-subtle-gray hover:text-white transition-colors text-sm tracking-wide"
            >
              Spotify
            </a>
          </div>
        </div>

        {/* Subtle branding */}
        <div className="text-center mt-8">
          <p className="text-accent-gray text-xs tracking-widest">
            PEDRO CAVVE
          </p>
        </div>
      </div>
    </footer>
  );
}
