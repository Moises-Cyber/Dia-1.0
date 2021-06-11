import './App.css';
import Header from "./componentes/cabecita"
import Footer from "./componentes/pezinho"
import Botaozito from "./componentes/corpitcho"

function App() {
  return (
    <>
    <Header />
    <Footer />
    <div className="content">
      <Botaozito />
    </div>
    </>
  );
}

export default App;
