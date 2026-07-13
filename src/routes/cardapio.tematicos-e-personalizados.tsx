import { createFileRoute } from "@tanstack/react-router";
import { CardapioPage } from "@/components/cardapio-page";
import imgAsset from "@/assets/doce-tematico-capa.jpg.asset.json";
const img = imgAsset.url;


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
          price50: "R$ 90,00",
          price100: "R$ 180,00",
        },
        {
          name: "Carimbados",
          description: "Doces com carimbos personalizados — nomes, logos, símbolos do tema.",
          price50: "R$ 90,00",
          price100: "R$ 180,00",
        },
        {
          name: "Modelados",
          description: "Peças modeladas à mão em formatos do tema escolhido.",
          price50: "R$ 90,00",
          price100: "R$ 180,00",
        },
      ]}
    >
      <p className="mt-10 p-5 rounded-lg bg-[color:var(--blush)] text-[color:var(--cacau)] italic text-[0.95rem] leading-relaxed border-l-[3px] border-[color:var(--rosegold)]">
        Os docinhos temáticos são produzidos de acordo com o tema de preferência do cliente.
      </p>
    </CardapioPage>
  );
}

