import { AboutSection } from "./components/AboutSection";
import { ConceptSection } from "./components/ConceptSection";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { MobileMenu } from "./components/MobileMenu";
import { ProjectsSection } from "./components/ProjectsSection";
import { Welcome } from "./components/Welcome";
import { useT } from "./hooks/useT";

function App() {
  const letsTalkText = useT({
    en: "Let's Talk!",
    pt: "Entre em contato!",
  });

  const emailText = useT({
    en: "send me an email",
    pt: "me mande um email",
  });

  const email = "izaelleavrillavigne@gmail.com";

  return (
    <>
      <Layout>
        <Header />
        <div className="grid grid-cols-1 gap-[96px]">
          <Welcome />
          <ProjectsSection />
          <ConceptSection />
          <AboutSection />
          <div className="text-center mb-[96px]">
            <p className="text-[32px] leading-[48px] mb-6">{letsTalkText}</p>
            <button
              className="text-[32px] leading-[48px] bg-primary text-onPrimary shadow-sm
                px-[20px] py-[15px] flex items-center gap-[10px] rounded-[50px] mx-auto
              "
              onClick={() => {
                window.location.href = "mailto:" + email;
              }}
            >
              {emailText}
              <img src="icons/send.svg" />
            </button>
          </div>
        </div>
      </Layout>
      <MobileMenu />
    </>
  );
}

export default App;
