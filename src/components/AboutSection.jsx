import { useEffect } from "react";
import { useT } from "../hooks/useT";

export const AboutSection = () => {
  const title = useT({
    en: "About me",
    pt: "Sobre mim",
  });

  const text1 = useT({
    en: "Hello! 👋 My name is Izaelle Lavigne, and I am a dedicated designer passionate about crafting digital experiences.",
    pt: "Olá! 👋 Meu nome é Izaelle Lavigne, e sou uma designer dedicada apaixonada por criar experiências digitais.",
  });

  const text2_1 = useT({
    en: "I started my journey in technology early, graduating as a computer technician and continuing with front-end development.",
    pt: "Iniciei minha jornada na tecnologia cedo, formando-me como técnica em informática e continuando com desenvolvimento front-end.",
  });
  const text2_bold = useT({
    en: "",
    pt: "",
  });
  const text2_2 = useT({
    en: "I discovered web design during this time and found my calling. Today, I focus on honing my skills in UX/UI design.",
    pt: " Descobri o design web durante esse período e encontrei minha vocação. Hoje, foco em aprimorar minhas habilidades em design UX/UI.",
  });

  useEffect(() => {
    const particlesContainer = document.querySelector(".particles");

    function createParticle() {
      const particle = document.createElement("div");
      particle.className = "particle";
      const size = Math.random() * 4 + 1; // Random size between 1px to 5px
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      const position = Math.random() * 100 + "%"; // Random horizontal position
      particle.style.left = position;
      particlesContainer.appendChild(particle);
      
      setTimeout(() => {
        particle.remove(); // Remove particle after animation ends
      }, 1500); // Adjust timing to match animation duration
    }

    const timeout = setInterval(createParticle, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section className="px-[12px] md:grid md:grid-cols-2" id="about">
      <div>
        <h1 className="font-semibold text-[48px] leading-[72px] mb-4">
          {title}
        </h1>
        <div className="mb-8 grid grid-cols-1 gap-6 text-[24px] leading-[36px]">
          <p>{text1}</p>
          <p>
            {text2_1} <span className="font-semibold">{text2_bold}</span>
          </p>
          <p>{text2_2}</p>
        </div>
      </div>
      <div className="avatar-container hidden md:inline-block">
        <img
          className="w-full object-cover object-top  rounded-full "
          src="images/avatar.png"
          alt="Elle Avatar"
        />
        <div className="particles"></div>
      </div>
    </section>
  );
};
