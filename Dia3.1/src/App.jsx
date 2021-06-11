import "./App.css";
import Header from "./componentes/cabecita";
import Footer from "./componentes/pezinho";
import Botaozito from "./componentes/corpitcho";
import { functionsIn } from "lodash";

function App() {
  return (
    <div className="main-wrapper">
      <Header />
      <Botaozito />
      <Footer />
    </div>
  );
}

export default App;
