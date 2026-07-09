import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

import heroAsset from "@/assets/williane-hero.jpg.asset.json";
import sobreImg from "@/assets/Willi.JPG";
import artesanaisImg from "@/assets/doces-artesanais.jpg";
import gourmetImg from "@/assets/doces-gourmet.jpg";
import tematicosImg from "@/assets/doces-tematicos.jpg";
import tropicalImg from "@/assets/portfolio-tropical.jpg";
import redvelvetImg from "@/assets/portfolio-redvelvet.jpg";
import amendoimImg from "@/assets/portfolio-amendoim.jpg";
import floralImg from "@/assets/portfolio-floral.jpg";

const WHATSAPP_URL = "https://wa.me/message/KJXWWB2VCFYYF1";

export const Route = createFileRoute("/")({
  component: Home,
});

const categorias = [
  {
    id: "tradicionais",
    name: "Doces Tradicionais",
    description:
      "Os clássicos que nunca saem de moda. Brigadeiros tradicionais e variações artesanais, feitos com ingredientes de qualidade e acabamento impecável.",
    img: artesanaisImg,
    to: "/cardapio/artesanais",
    alt: "Brigadeiros tradicionais de chocolate com granulado em caixa kraft",
  },
  {
    id: "gourmet",
    name: "Doces Gourmet",
    description:
      "Sofisticação em cada detalhe. Doces moldados com acabamento premium, sabores exclusivos e apresentação que impressiona antes mesmo do primeiro mordisco.",
    img: gourmetImg,
    to: "/cardapio/gourmet",
    alt: "Doces gourmet moldados em formatos florais coloridos",
  },
  {
    id: "tematicos",
    name: "Doces Temáticos e Personalizados",
    description:
      "Cada festa tem sua história. Doces criados sob medida para o tema da sua comemoração — do chá de bebê ao aniversário adulto, com detalhes que encantam.",
    img: tematicosImg,
    to: "/cardapio/tematicos-e-personalizados",
    alt: "Doces temáticos personalizados de chá de bebê em tons bege e dourado",
  },
] as const;

const depoimentos = [
  {
    quote:
      "Encomendei os doces para o aniversário da minha filha e foi um sucesso. Além de lindos, o sabor é incomparável — parecia que cada peça foi feita com muito carinho.",
    name: "Marina Torres",
    event: "Aniversário Infantil",
  },
  {
    quote:
      "Os doces personalizados do meu chá de bebê emocionaram todo mundo. A Willi entendeu exatamente o que eu queria e entregou muito além.",
    name: "Beatriz Almeida",
    event: "Chá de Bebê",
  },
  {
    quote:
      "Atendimento impecável do início ao fim. Os brigadeiros gourmet do meu casamento foram o comentário da festa — os convidados pediram para levar para casa.",
    name: "Larissa e Pedro",
    event: "Casamento",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-[color:var(--cream)]">
      <SiteNav />
      <main>
        <Hero />
        <Sobre />
        <TiposDeDoces />
        <Portfolio />
        <Depoimentos />
        <InstagramFeed />
        <ContatoCTA />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}

function Hero() {
  return (
    <section className="bg-[color:var(--blush)] pt-32 pb-16 lg:pt-40 lg:pb-24 min-h-screen flex items-center">
      <div className="mx-auto max-w-[1280px] w-full px-5 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="animate-fade-up">
          <span className="eyebrow block mb-6">Doces para momentos que ficam na memória</span>
          <h1 className="font-display font-bold leading-[0.98] tracking-tight text-[clamp(3rem,7vw,6rem)]">
            <span className="text-gradient-gold">Sua festa</span>
            <br />
            <span className="text-[color:var(--cacau)]">merece o sabor certo.</span>
          </h1>
          <p className="mt-8 text-lg text-[color:var(--rosewood)] max-w-xl leading-relaxed">
            Doces gourmet artesanais feitos à mão, com ingredientes selecionados e apresentação
            impecável para cada celebração.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3.5 rounded-md bg-[color:var(--rosegold)] text-white font-medium tracking-wide shadow-[var(--shadow-btn)] hover:-translate-y-0.5 hover:brightness-110 transition-all"
            >
              Quero encomendar
            </a>
            <a
              href="#tipos-de-doces"
              className="inline-flex items-center px-8 py-3.5 rounded-md border-[1.5px] border-[color:var(--rosegold)] text-[color:var(--rosegold)] font-medium tracking-wide hover:bg-[color:var(--rosegold)]/8 transition-colors"
            >
              Ver tipos de doces
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-[24px] bg-white/40 blur-2xl" aria-hidden />
          <img
            src={heroAsset.url}
            alt="Williane Diniz oferecendo bandeja de doces coloridos"
            className="relative w-full h-auto rounded-2xl object-cover shadow-[var(--shadow-photo)]"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}

function Sobre() {
  return (
    <section id="sobre" className="bg-[color:var(--blush)] py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <img
            src={sobreImg}
            alt="Williane Diniz, confeiteira e fundadora da Willi Doces, segurando uma bandeja de doces coloridos"
            loading="lazy"
            className="w-full max-w-md mx-auto lg:mx-0 aspect-[3/4] object-cover rounded-2xl shadow-[var(--shadow-photo)]"
          />
        </div>
        <div className="lg:pl-8">
          <span className="eyebrow block mb-4">Quem está por trás de cada doce</span>
          <span className="divider-gold mb-6" />
          <h2 className="font-display font-bold text-[clamp(2rem,4vw,3rem)] leading-tight text-gradient-gold">
            Olá! Sou Williane Diniz.
          </h2>
          <div className="mt-6 space-y-4 text-[1.0625rem] leading-[1.8] text-[color:var(--cacau)]">
            <p>Tenho 25 anos, sou confeiteira e apaixonada por transformar sentimentos em doces.</p>
            <p>
              Descobri nos doces uma forma de expressar carinho, dedicação e afeto, e foi assim que
              nasceu a Willi Doces Gourmet.
            </p>
            <p>
              Mais do que preparar brigadeiros e doces personalizados, meu propósito é fazer parte
              de histórias especiais, levando um toque de amor para cada comemoração. Cada receita
              é feita com cuidado, cada detalhe é pensado com carinho e cada doce carrega um
              pedacinho da minha paixão por encantar pessoas.
            </p>
            <p>
              Porque acredito que os melhores momentos da vida ficam ainda mais doces quando são
              compartilhados.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block text-[color:var(--rosegold)] font-medium underline underline-offset-4 decoration-[color:var(--rosegold)]/60 hover:decoration-[color:var(--rosegold)]"
          >
            Fale comigo pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function TiposDeDoces() {
  return (
    <section id="tipos-de-doces" className="bg-[color:var(--cream)] py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow block mb-4">O que a Willi faz</span>
          <span className="divider-gold mx-auto mb-6" />
          <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] leading-tight">
            <span className="text-gradient-gold">Tipos de Doces</span>
          </h2>
          <p className="mt-5 text-[color:var(--rosewood)] leading-relaxed">
            Do brigadeiro clássico ao doce autoral criado para o tema da sua festa — escolha uma
            categoria e veja o cardápio completo.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categorias.map((c) => (
            <Link
              key={c.id}
              to={c.to}
              className="group block bg-white rounded-xl border border-[color:var(--border-subtle)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display font-semibold text-[1.375rem] text-[color:var(--cacau)]">
                  {c.name}
                </h3>
                <p className="mt-3 text-[0.9375rem] text-[color:var(--rosewood)] leading-[1.6]">
                  {c.description}
                </p>
                <span className="mt-5 inline-flex items-center text-[color:var(--rosegold)] font-medium underline underline-offset-4 decoration-[color:var(--rosegold)]/50 group-hover:decoration-[color:var(--rosegold)]">
                  Ver cardápio
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const items = [
    { img: tropicalImg, caption: "Doces Tropicais — Aniversário — 2024" },
    { img: redvelvetImg, caption: "Brigadeiros Red Velvet — Casamento — 2024" },
    { img: amendoimImg, caption: "Brigadeiros de Amendoim — Confraternização — 2024" },
    { img: floralImg, caption: "Doces Florais — Chá de Panela — 2024" },
    { img: gourmetImg, caption: "Doces Gourmet — Batizado — 2024" },
    { img: tematicosImg, caption: "Doces Temáticos — Chá Revelação — 2024" },
  ];
  return (
    <section id="portfolio" className="bg-[color:var(--blush)] py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow block mb-4">Nossos trabalhos</span>
          <span className="divider-gold mx-auto mb-6" />
          <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] leading-tight text-[color:var(--cacau)]">
            Cada festa tem a sua história.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-12">
          <PortfolioTile item={items[0]} className="md:col-span-7 md:row-span-2 aspect-[4/3] md:aspect-auto" />
          <PortfolioTile item={items[1]} className="md:col-span-5 aspect-[4/3]" />
          <PortfolioTile item={items[2]} className="md:col-span-5 aspect-[4/3]" />
          <PortfolioTile item={items[3]} className="md:col-span-5 aspect-[4/3]" />
          <PortfolioTile item={items[4]} className="md:col-span-5 aspect-[4/3]" />
          <PortfolioTile item={items[5]} className="md:col-span-7 md:row-span-2 aspect-[4/3] md:aspect-auto" />
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.instagram.com/willi_docesgourmets/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3.5 rounded-md border-[1.5px] border-[color:var(--rosegold)] text-[color:var(--rosegold)] font-medium hover:bg-[color:var(--rosegold)]/8 transition-colors"
          >
            Mais trabalhos no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

function PortfolioTile({
  item,
  className,
}: {
  item: { img: string; caption: string };
  className?: string;
}) {
  return (
    <figure className={`group relative overflow-hidden rounded-lg ${className ?? ""}`}>
      <img
        src={item.img}
        alt={item.caption}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <figcaption className="absolute inset-0 grid place-items-center bg-[rgba(61,31,26,0.55)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-6 text-center">
        <span className="font-display text-white text-lg">{item.caption}</span>
      </figcaption>
    </figure>
  );
}

function Depoimentos() {
  return (
    <section id="depoimentos" className="bg-[color:var(--cream)] py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow block mb-4">O que dizem</span>
          <span className="divider-gold mx-auto mb-6" />
          <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] leading-tight text-[color:var(--cacau)]">
            Histórias que nos enchem de orgulho.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {depoimentos.map((d, i) => (
            <article
              key={i}
              className="relative bg-white rounded-xl border border-[color:var(--border-subtle)] p-8 shadow-[var(--shadow-card)] overflow-hidden"
            >
              <span
                aria-hidden
                className="absolute -top-4 -left-2 font-display font-black text-[7rem] leading-none text-[color:var(--velvet)] opacity-40 select-none"
              >
                “
              </span>
              <p className="relative font-display italic text-[color:var(--cacau)] leading-[1.8]">
                {d.quote}
              </p>
              <div className="relative mt-8">
                <span className="divider-gold mb-3" />
                <div className="font-display text-[color:var(--cacau)]">{d.name}</div>
                <div className="mt-1 text-[11px] tracking-[0.2em] uppercase font-light text-[color:var(--rosewood)]">
                  {d.event}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function InstagramFeed() {
  const feed = [tropicalImg, floralImg, gourmetImg, redvelvetImg, tematicosImg, amendoimImg];
  return (
    <section className="bg-[color:var(--blush)] py-20 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="eyebrow block mb-4">Nos acompanhe</span>
          <span className="divider-gold mx-auto mb-6" />
          <h2 className="font-display font-bold text-[clamp(1.75rem,3.5vw,3rem)] text-gradient-gold">
            @willi_docesgourmets
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-1">
          {feed.map((src, i) => (
            <a
              key={i}
              href="https://www.instagram.com/willi_docesgourmets/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden group"
              aria-label="Ver no Instagram"
            >
              <img src={src} alt="" loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 grid place-items-center bg-[rgba(61,31,26,0.6)] opacity-0 group-hover:opacity-100 transition-opacity">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="white" />
                </svg>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="https://www.instagram.com/willi_docesgourmets/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[color:var(--rosegold)] font-medium underline underline-offset-4"
          >
            Seguir no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

function ContatoCTA() {
  return (
    <section id="contato" className="bg-[color:var(--cacau)] py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
        <span className="block mb-4 text-[11px] tracking-[0.3em] uppercase font-light text-[color:var(--velvet)]">
          Vamos conversar
        </span>
        <h2 className="font-display font-bold text-[clamp(2.5rem,5vw,4rem)] leading-tight text-gradient-gold">
          Vamos criar algo especial juntos?
        </h2>
        <p className="mt-6 text-lg text-[color:var(--velvet)]/85">
          Entre em contato e conte como posso tornar sua festa ainda mais doce.
        </p>
        <div className="mt-10">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-4 rounded-md bg-[color:var(--rosegold)] text-white font-medium tracking-wide shadow-[var(--shadow-btn)] hover:-translate-y-0.5 hover:brightness-110 transition-all"
          >
            Fale pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
