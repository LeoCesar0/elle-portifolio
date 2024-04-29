import { Card } from "./Card";

export const ConceptSection = () => {
  const cards = [
    {
      imagePath: "images/responsive.svg",
      title: {
        en: "Responsive design",
        pt: "Design responsivo",
      },
      description: {
        en: "Make the site easier to view by displaying sites on different devices in ways that are easy to read and navigate",
        pt: "Facilitar a visualização do site exibindo sites em diferentes dispositivos de maneiras fáceis de ler e navegar",
      },
    },
    {
      imagePath: "images/identity.svg",
      title: {
        en: "Visual identity",
        pt: "Identidade visual",
      },
      description: {
        en: "Creation of the visual identity of the landing page, working with UI UX concepts",
        pt: "Criação da identidade visual da landing page, trabalhando com conceitos de UI UX",
      },
    },
    {
      imagePath: "images/designer-developer.svg",
      title: {
        en: "Designer + Developer",
        pt: "Designer + Desenvolvedor",
      },
      description: {
        en: "Organized and simple design to work alongside development",
        pt: "Design organizado e simples para trabalhar junto ao desenvolvimento",
      },
    },
  ];

  return (
    <section className="grid grid-cols-1 gap-[56px] px-[4px]">
      {cards.map((card) => {
        return (
          <Card
            key={card.imagePath}
            imagePath={card.imagePath}
            title={card.title}
            description={card.description}
          />
        );
      })}
      {/* <Card
        imagePath="images/responsive.svg"
        title="Responsive design"
        description="Make the site easier to view by displaying sites on different devices in ways that are easy to read and navigate"
      />
      <Card
        imagePath="images/identity.svg"
        title="Visual identity"
        description="Creation of the visual identity of the landing page, working with UI UX concepts"
      />
      <Card
        imagePath="images/designer-developer.svg"
        title="Design + Developer"
        description="Organized and simple design to work alongside development"
      /> */}
    </section>
  );
};