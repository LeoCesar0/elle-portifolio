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

  const tags = ["Figma", "Adobe", "React", "Javascript", "HTML", "CSS"];

  return (
    <section className="mt-16 px-[4px]">
      <div className="mb-6">
        <h1 className="font-semibold text-5xl leading-[72px] text-center mb-[24px]">
          {hello}
        </h1>
        <p className="leading-6 text-center text-onBackground/75">
          <strong className="font-semibold text-onBackground/75">
            {descriptionStrong}
          </strong>{" "}
          {description}
        </p>
      </div>
      <div className="carousel">
        <ol className="carousel__viewport">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="carousel__slide px-[20px] py-[10px] border border-border rounded-[30px]"
            >
              {tag}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
