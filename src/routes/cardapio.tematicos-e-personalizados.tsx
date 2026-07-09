import { createFileRoute } from "@tanstack/react-router";
import { CardapioPage } from "@/components/cardapio-page";
import img from "@/assets/doces-tematicos.jpg";

const WHATSAPP_URL = "https://wa.me/message/KJXWWB2VCFYYF1";

export const Route = createFileRoute("/cardapio/tematicos-e-personalizados")({
  head: () => ({
    meta: [
      { title: "Doces Temáticos e Personalizados | Willi Doces" },
      {
        name: "description",
        content:
          "Doces personalizados para chá de bebê, aniversário, casamento e mais. Solicite seu orçamento com a Willi.",
      },
      { property: "og:title", content: "Doces Temáticos e Personalizados | Willi Doces" },
      {
        property: "og:description",
        content: "Doces sob medida para o tema da sua festa.",
      },
      { property: "og:url", content: "/cardapio/tematicos-e-personalizados" },
    ],
    links: [{ rel: "canonical", href: "/cardapio/tematicos-e-personalizados" }],
  }),
  component: Page,
});

function Page() {
  return (
    <CardapioPage
      title="Doces Temáticos"
      intro="Cada festa tem sua história. Desenhamos junto com você — do tema à paleta — para criar peças únicas. Preços para caixas de 50 unidades e 100 unidades."
      heroImg={img}
      heroAlt="Doces temáticos personalizados em tons coloridos"
      items={[
        {
          name: "Coloridos",
          description: "Paleta de cores escolhida pelo cliente, acabamento delicado.",
          price: "R$ 90 / R$ 180",
        },
        {
          name: "Carimbados",
          description: "Doces com carimbos personalizados — nomes, logos, símbolos do tema.",
          price: "R$ 90 / R$ 180",
        },
        {
          name: "Modelados",
          description: "Peças modeladas à mão em formatos do tema escolhido.",
          price: "R$ 90 / R$ 180",
        },
      ]}
    >
      <div className="mt-16 bg-[color:var(--blush)] rounded-2xl p-8 sm:p-12">
        <span className="eyebrow block mb-3">Conte sua ideia</span>
        <span className="divider-gold mb-5" />
        <h3 className="font-display font-bold text-[clamp(1.5rem,3vw,2rem)] text-gradient-gold">
          Vamos criar juntas o cardápio da sua festa.
        </h3>
        <p className="mt-4 text-[color:var(--rosewood)] leading-relaxed">
          Preencha os detalhes e enviaremos o orçamento pelo WhatsApp em até 24h.
        </p>

        <form
          className="mt-8 grid gap-5 sm:grid-cols-2"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = new FormData(form);
            const msg = [
              `Olá, Willi! Gostaria de um orçamento personalizado.`,
              `Nome: ${data.get("nome")}`,
              `Data do evento: ${data.get("data")}`,
              `Tema: ${data.get("tema")}`,
              `Quantidade estimada: ${data.get("qtd")}`,
              `Mensagem: ${data.get("mensagem")}`,
            ].join("\n");
            window.open(
              `${WHATSAPP_URL}?text=${encodeURIComponent(msg)}`,
              "_blank",
              "noopener,noreferrer",
            );
          }}
        >
          <Field label="Nome" name="nome" required />
          <Field label="Data do evento" name="data" type="date" required />
          <Field label="Tema" name="tema" placeholder="Ex: Chá de bebê safári" required />
          <Field label="Quantidade estimada" name="qtd" placeholder="Ex: 80 doces" required />
          <div className="sm:col-span-2 flex flex-col gap-1.5">
            <label className="text-sm font-medium text-[color:var(--rosewood)]">Mensagem</label>
            <textarea
              name="mensagem"
              rows={4}
              className="rounded-md border-[1.5px] border-[color:var(--border-subtle)] bg-white px-4 py-3 text-[color:var(--cacau)] focus:outline-none focus:border-[color:var(--rosegold)] focus:ring-4 focus:ring-[color:var(--rosegold)]/15 transition"
              placeholder="Conte sua ideia..."
            />
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-md bg-[color:var(--rosegold)] text-white font-medium tracking-wide shadow-[var(--shadow-btn)] hover:-translate-y-0.5 hover:brightness-110 transition-all"
            >
              Enviar orçamento pelo WhatsApp
            </button>
          </div>
        </form>
      </div>
    </CardapioPage>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-[color:var(--rosewood)]">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="rounded-md border-[1.5px] border-[color:var(--border-subtle)] bg-white px-4 py-3 text-[color:var(--cacau)] focus:outline-none focus:border-[color:var(--rosegold)] focus:ring-4 focus:ring-[color:var(--rosegold)]/15 transition"
      />
    </div>
  );
}
