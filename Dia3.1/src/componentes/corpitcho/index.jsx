import "./styles.css";
import MostraEsconde from "./indexlogo.jsx"
import React,{useState} from "react";

function Botaozito() {
  const [showImage, setshowImage] = useState(true);
  let content = null;
  if (showImage == true){
    content = <MostraEsconde />
  }

  function ShowHideImage() {
    setshowImage(!showImage);
  }

  return (
    <div className="SecaoToda">
      {content}
      <button type="button" onClick={() => ShowHideImage()}>
        <div className="ButtonName">
          <h1 className="Letter">Mostra/Esconde Card</h1>
        </div>
      </button>
    </div>
  );
}

export default Botaozito;
