import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-[color:var(--cream)] border-t border-[color:var(--border-subtle)]">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12 py-10 grid gap-8 md:grid-cols-3 items-center">
        <Link to="/" className="flex items-baseline gap-2 justify-self-start" aria-label="Willi Doces">
          <span className="font-display text-2xl font-bold text-gradient-gold">Willi</span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-[color:var(--rosewood)] font-light">
            doces para festas
          </span>
        </Link>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[color:var(--rosewood)]">
          <a href="/#" className="hover:text-[color:var(--cacau)]">Início</a>
          <a href="/#sobre" className="hover:text-[color:var(--cacau)]">Sobre</a>
          <a href="/#tipos-de-doces" className="hover:text-[color:var(--cacau)]">Tipos de Doces</a>
          <a href="/#portfolio" className="hover:text-[color:var(--cacau)]">Portfólio</a>
          <a href="/#contato" className="hover:text-[color:var(--cacau)]">Contato</a>
        </nav>

        <a
          href="https://www.instagram.com/willi_docesgourmets/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram @willi_docesgourmets"
          className="justify-self-end text-[color:var(--rosewood)] hover:text-[color:var(--rosegold)] transition-colors"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
          </svg>
        </a>
      </div>
      <div className="border-t border-[color:var(--border-subtle)]">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12 py-5 text-xs font-light text-[color:var(--rosewood)] text-center">
          © {new Date().getFullYear()} Willi Doces Para Festas · Feito à mão com amor por Williane Diniz
        </div>
      </div>
    </footer>
  );
}
