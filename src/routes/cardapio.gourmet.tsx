import { createFileRoute } from "@tanstack/react-router";
import { CardapioPage } from "@/components/cardapio-page";
import img from "@/assets/doces-gourmet.jpg";

export const Route = createFileRoute("/cardapio/gourmet")({
  head: () => ({
    meta: [
      { title: "Doces Gourmet — Cardápio | Willi Doces" },
      {
        name: "description",
        content:
          "Doces gourmet moldados com acabamento premium. Veja os sabores e preços da Willi Doces.",
      },
      { property: "og:title", content: "Doces Gourmet — Cardápio | Willi Doces" },
      {
        property: "og:description",
        content: "Doces moldados premium com apresentação impecável.",
      },
      { property: "og:url", content: "/cardapio/gourmet" },
    ],
    links: [{ rel: "canonical", href: "/cardapio/gourmet" }],
  }),
  component: Page,
});

function Page() {
  return (
    <CardapioPage
      title="Doces Gourmet"
      intro="Sofisticação em cada detalhe. Doces moldados em chocolate belga com formatos exclusivos e acabamento premium."
      heroImg={img}
      heroAlt="Doces gourmet moldados florais em prato de cerâmica branca"
      items={[
        {
          name: "Doce Moldado Floral",
          description: "Chocolate branco em formatos de flor e rosa, tons pastel.",
          price: "R$ 6,00",
        },
        {
          name: "Doce Tropical",
          description: "Hibisco, folha monstera e frutas em chocolate colorido.",
          price: "R$ 6,50",
        },
        {
          name: "Ouriço de Chocolate",
          description: "Casca crocante de chocolate meio amargo com recheio trufado.",
          price: "R$ 7,00",
        },
        {
          name: "Bombom de Frutas Vermelhas",
          description: "Chocolate ao leite com ganache de framboesa e cassis.",
          price: "R$ 7,50",
        },
        {
          name: "Pistache Premium",
          description: "Chocolate branco moldado com creme de pistache siciliano.",
          price: "R$ 8,00",
        },
        {
          name: "Doce Rosé Dourado",
          description: "Chocolate rosé com detalhe de folha de ouro comestível.",
          price: "R$ 9,00",
        },
      ]}
    />
  );
}
