import "./App.css";
import { Catalogo } from "./components/Catalogo/Catalogo";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Catalogo />
      <Footer />
    </>
  );
}

export default App;
