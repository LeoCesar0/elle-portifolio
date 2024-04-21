import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { Welcome } from "./components/Welcome";

function App() {
  return (
    <>
      <Layout>
        <Header />
        <Welcome />
      </Layout>
    </>
  );
}

export default App;
