import "./App.css";
import Header from "./componentes/cabecita";
import Footer from "./componentes/pezinho";
import Botaozito from "./componentes/corpitcho";

function App() {
  return (
    <div className="main-wrapper">
      <Header />
      <div className="botau">
        <Botaozito />
      </div>
      <Footer />
    </div>
  );
}

export default App;
