import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

const WHATSAPP_URL = "https://wa.me/message/KJXWWB2VCFYYF1";

export interface CardapioItem {
  name: string;
  description: string;
  price50: string;
  price100: string;
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
      <main className="pb-32">
        <section className="bg-[color:var(--blush)] pt-28 pb-12 sm:pt-32 sm:pb-14 lg:pt-40 lg:pb-20">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
            <nav className="text-[11px] sm:text-xs font-light tracking-[0.15em] uppercase text-[color:var(--rosewood)] mb-5 sm:mb-6 flex flex-wrap gap-x-2 gap-y-1">
              <Link to="/" className="hover:text-[color:var(--cacau)]">Início</Link>
              <span className="opacity-50">/</span>
              <a href="/#tipos-de-doces" className="hover:text-[color:var(--cacau)]">Tipos de Doces</a>
              <span className="opacity-50">/</span>
              <span className="text-[color:var(--cacau)]">{title}</span>
            </nav>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
              <div>
                <span className="eyebrow block mb-4">Cardápio</span>
                <h1 className="font-display font-bold text-[clamp(2rem,5vw,4rem)] leading-tight text-gradient-gold">
                  {title}
                </h1>
                <p className="mt-5 sm:mt-6 text-base sm:text-lg text-[color:var(--rosewood)] leading-relaxed max-w-lg">
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

        <section className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[900px] px-4 sm:px-8">
            <div className="overflow-hidden rounded-xl border border-[color:var(--border-subtle)] bg-white shadow-[var(--shadow-card)]">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-[color:var(--blush)]">
                    <th
                      scope="col"
                      className="py-3 px-3 sm:py-4 sm:px-6 font-display font-semibold text-[color:var(--cacau)] text-sm sm:text-base"
                    >
                      {title}
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-2 sm:py-4 sm:px-4 font-display font-semibold text-[color:var(--cacau)] text-xs sm:text-sm text-right whitespace-nowrap w-[22%] sm:w-[18%]"
                    >
                      50 un.
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-3 sm:py-4 sm:px-6 font-display font-semibold text-[color:var(--cacau)] text-xs sm:text-sm text-right whitespace-nowrap w-[22%] sm:w-[18%]"
                    >
                      100 un.
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((it) => (
                    <tr
                      key={it.name}
                      className="border-t border-[color:var(--border-subtle)] align-top"
                    >
                      <td className="py-4 px-3 sm:py-5 sm:px-6 min-w-0">
                        <div className="font-display font-medium text-[color:var(--cacau)] text-[0.95rem] sm:text-[1.05rem]">
                          {it.name}
                        </div>
                        <p className="mt-1 text-[0.8rem] sm:text-[0.9rem] text-[color:var(--rosewood)] leading-relaxed">
                          {it.description}
                        </p>
                      </td>
                      <td className="py-4 px-2 sm:py-5 sm:px-4 text-right whitespace-nowrap font-display font-semibold text-[color:var(--rosegold)] text-[0.85rem] sm:text-[0.95rem]">
                        {it.price50}
                      </td>
                      <td className="py-4 px-3 sm:py-5 sm:px-6 text-right whitespace-nowrap font-display font-semibold text-[color:var(--rosegold)] text-[0.85rem] sm:text-[0.95rem]">
                        {it.price100}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
