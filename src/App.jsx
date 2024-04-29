import { AboutSection } from "./components/AboutSection";
import { ConceptSection } from "./components/ConceptSection";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { ProjectsSection } from "./components/ProjectsSection";
import { Welcome } from "./components/Welcome";

function App() {
  return (
    <>
      <Layout>
        <Header />
        <div className="grid grid-cols-1 gap-[96px]">
          <Welcome />
          <ProjectsSection />
          <ConceptSection />
          <AboutSection />
        </div>
      </Layout>
    </>
  );
}

export default App;
