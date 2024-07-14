import { useT } from "../hooks/useT";

export const Welcome = () => {
  const hello = useT({
    en: "Hello!",
    pt: "Olá!",
  });

  const description1 = useT({
    en: "I am a",
    pt: "Sou uma",
  });

  const description2 = useT({
    en: "who creates intuitive and captivating digital experiences.",
    pt: "que cria experiências digitais intuitivas e cativantes.",
  });

  const descriptionDetail = useT({
    en: "UI UX Designer",
    pt: "UI UX Designer",
  });

  const tags = ["Figma", "Adobe", "React", "Javascript", "HTML", "CSS"];

  return (
    <section className="mt-16 px-[4px] mx-auto  max-w-[835px] w-full md:mb-[20px]">
      <div className="mb-6 md:max-w-[506px] md:mx-auto ">
        <h1 className="font-semibold text-5xl leading-[72px] text-center mb-[24px] animate-fade-up animate-delay-100 animate-ease-out">
          {hello}
        </h1>
        <p className="leading-6 text-center text-onBackground/75 md:text-[24px] md:leading-[36px]">
          <span className="animate-fade-up delay-500">{description1}</span>{" "}
          <span className="animate-fade-up delay-700">
            <strong className=" text-onBackground/75 welcome-gradient">
              {descriptionDetail}
            </strong>
          </span>{" "}
          <span className="animate-fade-up delay-1000">{description2}</span>
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
