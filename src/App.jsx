import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { ProjectsSection } from "./components/ProjectsSection";
import { Welcome } from "./components/Welcome";

function App() {
  return (
    <>
      <Layout>
        <Header />
        <Welcome />
        <ProjectsSection />
      </Layout>
    </>
  );
}

export default App;
