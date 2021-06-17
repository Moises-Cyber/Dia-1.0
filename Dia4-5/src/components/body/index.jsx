import "./styles.css";
import React,{useState} from "react";

function AddTask(){
    const [Task, setTask] = useState(0);
    let content = null;
    let tarefa1 = document.getElementById('Tarefa')
    content = tarefa1;
}

function ShowTask(){
        setTask(content);
}

function List(){
    return(
        <div className="Menu">
            <h1 className="titulo">Lista</h1>
            <div className="InputandButton">
                <input id="Tarefa" type="text" placeholder="Nome"></input>
                <button type="button" onclick={() => ShowTask()}>Adicionar</button>
                {content}
            </div>
        </div>
    );

}

export default List;    




/*
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

*/