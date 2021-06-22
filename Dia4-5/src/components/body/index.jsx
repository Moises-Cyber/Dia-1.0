import "./styles.css";
import React,{ useState } from "react";

function HandleTask(){
  const [task, setTask] = useState("")
  const [list, setList] = useState([])

  let mapItens = list.map(mapList)

  function newTask(e){
    setTask(e.target.value);
  }

  function handleNewTask(){
    if(task.trim() === ""){
    alert('Preencha o campo')
    return;
    }
    setList((prevState) =>{
    return [...prevState, task]
    })
  }

  function mapList(elemento){
   return(
      <div>
        <strong>Tarefa:</strong> {elemento}
      </div>
   )
  }


  return (
    <div className="Menu">
      <h1 className="titulo">Lista</h1>
      <div className="InputandButton">
        <input id="Tarefa" type="text" placeholder="Nome" value={task} onChange={newTask} />
        <button type="button" onClick={handleNewTask}>Adicionar</button>
      </div>
      <ul>{mapItens}</ul>
    </div>
  );
}

export default HandleTask;
