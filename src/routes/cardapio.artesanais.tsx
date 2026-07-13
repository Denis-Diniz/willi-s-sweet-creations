import { createFileRoute } from "@tanstack/react-router";
import { CardapioPage } from "@/components/cardapio-page";
import imgAsset from "@/assets/doce-tradicional-capa.jpg.asset.json";
const img = imgAsset.url;

export const Route = createFileRoute("/cardapio/artesanais")({
  head: () => ({
    meta: [
      { title: "Doces Tradicionais — Cardápio | Willi Doces" },
      {
        name: "description",
        content:
          "Brigadeiros e doces tradicionais feitos à mão com ingredientes de qualidade. Veja o cardápio completo da Willi Doces.",
      },
      { property: "og:title", content: "Doces Tradicionais — Cardápio | Willi Doces" },
      {
        property: "og:description",
        content: "Brigadeiros e doces tradicionais, feitos à mão.",
      },
      { property: "og:url", content: "/cardapio/artesanais" },
    ],
    links: [{ rel: "canonical", href: "/cardapio/artesanais" }],
  }),
  component: Page,
});

const items = [
  { name: "Brigadeiro", description: "Chocolate 50% cacau com granulado, o clássico atemporal." },
  { name: "Leite Ninho", description: "Cremoso de leite Ninho com toque adocicado." },
  { name: "Beijinho", description: "Cremoso e suave, preparado com coco ralado." },
  { name: "Moranguinho", description: "Sabor delicado de morango com finalização caprichada." },
  { name: "Cajuzinho", description: "Tradicional combinação de amendoim e chocolate, com sabor intenso e marcante." },
  { name: "Casadinho", description: "Meio branco, meio brigadeiro — o par perfeito." },
].map((it) => ({ ...it, price50: "R$ 60,00", price100: "R$ 120,00" }));

function Page() {
  return (
    <CardapioPage
      title="Doces Tradicionais"
      intro="Os clássicos que nunca saem de moda. Cada doce é enrolado à mão, com ingredientes selecionados e finalização cuidadosa. Preços para caixas de 50 unidades e 100 unidades."
      heroImg={img}
      heroAlt="Doces tradicionais em caixa kraft, vista aérea"
      items={items}
    />
  );
}
