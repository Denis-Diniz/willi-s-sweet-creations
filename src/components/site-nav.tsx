import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const WHATSAPP_URL = "https://wa.me/message/KJXWWB2VCFYYF1";

const links = [
  { label: "Início", to: "/", hash: undefined },
  { label: "Sobre", to: "/", hash: "sobre" },
  { label: "Tipos de Doces", to: "/", hash: "tipos-de-doces" },
  { label: "Portfólio", to: "/", hash: "portfolio" },
  { label: "Depoimentos", to: "/", hash: "depoimentos" },
  { label: "Contato", to: "/", hash: "contato" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[color:var(--cream)]/90 backdrop-blur-md shadow-[0_2px_20px_rgba(61,31,26,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12 h-20 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-baseline gap-2 shrink-0" aria-label="Willi Doces Para Festas">
          <span className="font-display text-2xl font-bold text-gradient-gold tracking-tight">
            Willi
          </span>
          <span className="hidden sm:inline text-[10px] tracking-[0.3em] uppercase text-[color:var(--rosewood)] font-light">
            doces para festas
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.hash ? `/#${l.hash}` : "/"}
              className="text-[0.9375rem] text-[color:var(--rosewood)] hover:text-[color:var(--cacau)] transition-colors relative group"
            >
              {l.label}
              <span className="absolute left-0 -bottom-1 h-px w-0 group-hover:w-full transition-all duration-300 bg-[color:var(--rosegold)]" />
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center px-6 py-2.5 rounded-md border-[1.5px] border-[color:var(--rosegold)] text-[color:var(--rosegold)] text-sm font-medium hover:bg-[color:var(--rosegold)]/8 transition-colors"
        >
          Encomendar
        </a>

        <button
          onClick={() => setOpen(true)}
          className="lg:hidden p-2 -mr-2 text-[color:var(--cacau)]"
          aria-label="Abrir menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-[color:var(--blush)] flex flex-col animate-fade-up lg:hidden">
          <div className="h-20 px-5 flex items-center justify-between">
            <span className="font-display text-2xl font-bold text-gradient-gold">Willi</span>
            <button onClick={() => setOpen(false)} aria-label="Fechar menu" className="p-2 -mr-2 text-[color:var(--cacau)]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <nav className="flex-1 flex flex-col items-center justify-center gap-8 px-5">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.hash ? `/#${l.hash}` : "/"}
                onClick={() => setOpen(false)}
                className="font-display text-2xl text-[color:var(--cacau)]"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="p-6">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center w-full py-4 rounded-md bg-[color:var(--rosegold)] text-white font-medium tracking-wide shadow-[var(--shadow-btn)]"
            >
              Fale pelo WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
