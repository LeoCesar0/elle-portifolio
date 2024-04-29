import { Card } from "./Card";

export const ConceptSection = () => {
  return (
    <section className="grid grid-cols-1 gap-[56px] px-[4px]">
      <Card
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
      />
    </section>
  );
};
