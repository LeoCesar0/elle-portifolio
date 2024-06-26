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
    <section className="mt-16 px-[4px] mx-auto  max-w-[835px] w-full md:mb-[20px]">
      <div className="mb-6 md:max-w-[506px] md:mx-auto ">
        <h1 className="font-semibold text-5xl leading-[72px] text-center mb-[24px]">
          {hello}
        </h1>
        <p className="leading-6 text-center text-onBackground/75 md:text-[24px] md:leading-[36px]">
          <strong className="font-semibold text-onBackground/75">
            {descriptionStrong}
          </strong>{" "}
          {description}
        </p>
      </div>
      <div className="carousel">
        <ol className="carousel__viewport md:hidden">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="carousel__slide px-[20px] py-[10px] border border-border rounded-[30px]"
            >
              {tag}
            </li>
          ))}
        </ol>
        <div className="hidden md:block">
          <ol className="carousel__viewport items-center ">
            {tags.slice(0, 2).map((tag, index) => (
              <li
                key={index}
                className="carousel__slide px-[20px] py-[10px] border border-border rounded-[30px]"
              >
                {tag}
              </li>
            ))}
            <div className="h-[1px] w-[81px] bg-border"></div>
            {tags.slice(2).map((tag, index) => (
              <li
                key={index}
                className="carousel__slide px-[20px] py-[10px] border border-border rounded-[30px]"
              >
                {tag}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
