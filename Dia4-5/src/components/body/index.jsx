import "./styles.css";
import React,{Component} from "react";
export default class TaskList extends Component{
    state = {
    tarefa : "",
    tarefas: []
  }
  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  } 
  render(){
    return(
      <div className="Menu">
        <h1 className="titulo">Lista</h1>
        <div className="InputandButton">
          <input id="Tarefa" type="text" placeholder="Nome" value={this.state.tarefa} onChange={this.handleChange}/>
          <button type="button" onClick={this.handleClick}>Adicionar</button>
        </div>
        <ul>
          {this.state.tarefas.map(tarefa =><p key={tarefa}><strong>Tarefa:</strong> {tarefa}</p>)}
        </ul>
      </div>
    );
  }
  handleChange(event){
    this.setState({tarefa: event.target.value});
  }
  handleClick(){
    const {tarefa, tarefas} = this.state;
    this.setState({
      tarefa: "",
      tarefas: [].concat(tarefas,tarefa)});
  }
}
