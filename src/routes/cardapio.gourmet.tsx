import { createFileRoute } from "@tanstack/react-router";
import { CardapioPage } from "@/components/cardapio-page";
import imgAsset from "@/assets/doce-gourmet-capa.jpg.asset.json";
const img = imgAsset.url;

export const Route = createFileRoute("/cardapio/gourmet")({
  head: () => ({
    meta: [
      { title: "Doces Gourmet — Cardápio | Willi Doces" },
      {
        name: "description",
        content:
          "Doces gourmet com acabamento premium. Veja os sabores e preços da Willi Doces.",
      },
      { property: "og:title", content: "Doces Gourmet — Cardápio | Willi Doces" },
      {
        property: "og:description",
        content: "Doces premium com apresentação impecável.",
      },
      { property: "og:url", content: "/cardapio/gourmet" },
    ],
    links: [{ rel: "canonical", href: "/cardapio/gourmet" }],
  }),
  component: Page,
});

const items = [
  { name: "Ferrero Rocher", description: "Recheio de avelã com crocante e cobertura clássica.", price50: "R$ 70,00", price100: "R$ 140,00" },
  { name: "Ninho com Nutella", description: "Leite Ninho com centro cremoso de Nutella.", price50: "R$ 70,00", price100: "R$ 140,00" },
  { name: "Oreo", description: "Creme branco com biscoito Oreo triturado.", price50: "R$ 70,00", price100: "R$ 140,00" },
  { name: "Chocolate Branco", description: "Sabor suave e aveludado de chocolate branco.", price50: "R$ 70,00", price100: "R$ 140,00" },
  { name: "Caipirinha (alcoólico)", description: "Toque cítrico com um leve blend alcoólico. Somente para adultos.", price50: "R$ 80,00", price100: "R$ 160,00" },
];

function Page() {
  return (
    <CardapioPage
      title="Doces Gourmet"
      intro="Sofisticação em cada detalhe. Sabores exclusivos e acabamento premium. Preços para caixas de 50 unidades e 100 unidades."
      heroImg={img}
      heroAlt="Doces gourmet moldados em prato de cerâmica branca"
      items={items}
    />
  );
}
