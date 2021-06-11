import "./styles.css";

function MostraEsconde() {
  const logo1 = require("../assets/logo.png");
  return (
    <div className="conteudo">
      <h1 className="titulo">Serra Junior Engenharia</h1>
      <img className="imagem" src={logo1} />
    </div>
  );
}

export default MostraEsconde;
