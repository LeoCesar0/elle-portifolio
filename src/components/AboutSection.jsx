import { useT } from "../hooks/useT";

export const AboutSection = () => {
  const title = useT({
    en: "About me",
    pt: "Sobre mim",
  });

  const text1 = useT({
    en: "Hello! 👋 My name is Izaelle Lavigne, and I am passionate about crafting digital experiences. Currently, I am studying web design and programming, delving into the realm of online creation.",
    pt: "Olá! 👋 Meu nome é Izaelle Lavigne, e sou apaixonada por criar experiências digitais. Atualmente, estou estudando design e programação web, adentrando no universo da criação online.",
  });

  const text2_1 = useT({
    en: "Since I began my journey, I've had the opportunity to enhance my skills in responsive",
    pt: "Desde que comecei minha jornada, tive a oportunidade de aprimorar minhas habilidades em design responsivo",
  });
  const text2_bold = useT({
    en: "design, UX/UI, and front-end developer",
    pt: "design, UX/UI e desenvolvedora front-end",
  });
  const text2_2 = useT({
    en: "I have a keen eye for detail and a passion for creating visually appealing solutions that also provide an exceptional user experience.",
    pt: "Tenho um olhar atento aos detalhes e uma paixão por criar soluções visualmente atraentes que também proporcionem uma experiência de usuário excepcional.",
  });

  return (
    <section className="px-[12px] md:grid md:grid-cols-2" id="about">
      <div>
        <h1 className="font-semibold text-[48px] leading-[72px] mb-4">
          {title}
        </h1>
        <div className="mb-8 grid grid-cols-1 gap-6 text-[24px] leading-[36px]">
          <p>{text1}</p>
          <p>
            {text2_1} <span className="font-semibold">{text2_bold}</span>.
          </p>
          <p>{text2_2}</p>
        </div>
      </div>
      <img
        className="w-full h-full object-cover object-top "
        src="images/avatar.png"
        alt="Elle Avatar"
      />
    </section>
  );
};
