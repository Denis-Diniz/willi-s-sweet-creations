import { createFileRoute } from "@tanstack/react-router";
import { CardapioPage } from "@/components/cardapio-page";
import img from "@/assets/doces-artesanais.jpg";

export const Route = createFileRoute("/cardapio/artesanais")({
  head: () => ({
    meta: [
      { title: "Doces Artesanais — Cardápio | Willi Doces" },
      {
        name: "description",
        content:
          "Brigadeiros e doces artesanais clássicos feitos com ingredientes de qualidade. Veja o cardápio completo da Willi Doces.",
      },
      { property: "og:title", content: "Doces Artesanais — Cardápio | Willi Doces" },
      {
        property: "og:description",
        content: "Brigadeiros e doces artesanais clássicos, feitos à mão.",
      },
      { property: "og:url", content: "/cardapio/artesanais" },
    ],
    links: [{ rel: "canonical", href: "/cardapio/artesanais" }],
  }),
  component: Page,
});

function Page() {
  return (
    <CardapioPage
      title="Doces Artesanais"
      intro="Os clássicos que nunca saem de moda. Cada brigadeiro é enrolado à mão, com chocolate nobre e finalização cuidadosa."
      heroImg={img}
      heroAlt="Brigadeiros artesanais em caixa kraft, vista aérea"
      items={[
        {
          name: "Brigadeiro Tradicional",
          description: "Chocolate nobre com granulado belga.",
          price: "R$ 3,50",
        },
        {
          name: "Brigadeiro Red Velvet",
          description: "Cobertura de açúcar cristal vermelho e recheio aveludado.",
          price: "R$ 4,50",
        },
        {
          name: "Brigadeiro de Amendoim",
          description: "Recheio de pasta de amendoim, finalizado com castanha.",
          price: "R$ 4,00",
        },
        {
          name: "Beijinho de Coco",
          description: "Coco fresco e cravo da índia — a receita da vovó.",
          price: "R$ 3,50",
        },
        {
          name: "Brigadeiro Ninho com Nutella",
          description: "Leite em pó Ninho e centro cremoso de Nutella.",
          price: "R$ 5,00",
        },
        {
          name: "Cajuzinho",
          description: "Amendoim moído, chocolate e castanha inteira no topo.",
          price: "R$ 4,00",
        },
      ]}
    />
  );
}
