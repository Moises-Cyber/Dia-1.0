import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BlackCard from "./components/Corpo/cardpreto";
import RedCard from "./components/Corpo/cardvermelho"


function App() {
  return(
    <>   
      <Header />
      <Footer />
      <div>
        <div className="nome">
          <BlackCard name="Moisés" />
          <BlackCard name="Maike" />
          <BlackCard name="Sarah" />
        </div>
        <div className="caracteristicas">
          <RedCard idade="21" time="Flamengo" sobrenome="Alves" />
          <RedCard idade="22" time="Flamengo" sobrenome="Barreto" /> 
          <RedCard idade="20" time="Flamengo" sobrenome="Schayder" />
        </div>
      </div>
    </>
  );

}

export default App;