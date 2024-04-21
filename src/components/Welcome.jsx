import { useT } from "../hooks/useT";

export const Welcome = () => {
  const hello = useT({
    en: "Hello!",
    pt: "Olá!",
  });

  const descriptionStrong = useT({
    en: "I'm a UX UI Designer who",
    pt: "Sou uma UX UI Designer que",
  });

  const description = useT({
    en: "creates intuitive and captivating digital experiences.",
    pt: "cria experiências digitais intuitivas e cativantes.",
  });

  return (
    <section className="mt-16  ">
      <h1 className="font-semibold text-5xl leading-[72px] text-center mb-[24px]">
        {hello}
      </h1>
      <p className="leading-6 text-center text-onBackground/75">
        <strong className="font-semibold text-onBackground/75">
          {descriptionStrong}
        </strong>{" "}
        {description}
      </p>
    </section>
  );
};
