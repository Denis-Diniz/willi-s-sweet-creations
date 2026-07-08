import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

const WHATSAPP_URL = "https://wa.me/message/KJXWWB2VCFYYF1";

export interface CardapioItem {
  name: string;
  description: string;
  price: string;
}

interface CardapioPageProps {
  title: string;
  intro: string;
  heroImg: string;
  heroAlt: string;
  items: CardapioItem[];
  children?: ReactNode;
}

export function CardapioPage({ title, intro, heroImg, heroAlt, items, children }: CardapioPageProps) {
  const [stickyVisible, setStickyVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setStickyVisible(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[color:var(--cream)]">
      <SiteNav />
      <main className="pb-24">
        <section className="bg-[color:var(--blush)] pt-32 pb-14 lg:pt-40 lg:pb-20">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
            <nav className="text-xs font-light tracking-[0.15em] uppercase text-[color:var(--rosewood)] mb-6">
              <Link to="/" className="hover:text-[color:var(--cacau)]">Início</Link>
              <span className="mx-2 opacity-50">/</span>
              <a href="/#tipos-de-doces" className="hover:text-[color:var(--cacau)]">Tipos de Doces</a>
              <span className="mx-2 opacity-50">/</span>
              <span className="text-[color:var(--cacau)]">{title}</span>
            </nav>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="eyebrow block mb-4">Cardápio</span>
                <h1 className="font-display font-bold text-[clamp(2.5rem,5vw,4rem)] leading-tight text-gradient-gold">
                  {title}
                </h1>
                <p className="mt-6 text-lg text-[color:var(--rosewood)] leading-relaxed max-w-lg">
                  {intro}
                </p>
              </div>
              <img
                src={heroImg}
                alt={heroAlt}
                loading="lazy"
                className="w-full max-w-lg mx-auto rounded-2xl aspect-[4/3] object-cover shadow-[var(--shadow-photo)]"
              />
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-[1000px] px-5 sm:px-8">
            <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {items.map((it) => (
                <article
                  key={it.name}
                  className="border-b border-[color:var(--border-subtle)] pb-6"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display font-medium text-[1.25rem] text-[color:var(--cacau)]">
                      {it.name}
                    </h3>
                    <span className="font-display font-bold text-[color:var(--rosegold)] whitespace-nowrap">
                      {it.price}
                    </span>
                  </div>
                  <p className="mt-2 text-[0.95rem] text-[color:var(--rosewood)] leading-relaxed">
                    {it.description}
                  </p>
                </article>
              ))}
            </div>

            {children}

            <div className="mt-12 text-center">
              <a
                href="/#tipos-de-doces"
                className="text-[color:var(--rosegold)] font-medium underline underline-offset-4"
              >
                ← Voltar para Tipos de Doces
              </a>
            </div>
          </div>
        </section>
      </main>

      <div
        className={`fixed inset-x-0 bottom-0 z-30 transition-transform duration-300 ${
          stickyVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-4 text-center bg-[color:var(--rosegold)] text-white font-medium tracking-wide shadow-[0_-4px_20px_rgba(61,31,26,0.15)]"
        >
          Encomendar pelo WhatsApp
        </a>
      </div>

      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
