import "./styles.css";
import logo from "../assets/logo.png";

function MostraEsconde() {
  return (
    <div className="conteudo">
      <h1 className="titulo">Serra Junior Engenharia</h1>
      <img className="imagem" src={logo} />
    </div>
  );
}

export default MostraEsconde;
