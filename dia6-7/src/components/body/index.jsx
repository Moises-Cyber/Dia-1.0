import "./styles.css";
import React,{Component} from "react";

export default class Receitas extends Component{

    state = {
        cardName: "", cardTime: "", cardCategory: "",
        cardsName: [], cardsTime: [], cardsCategory: [],
        divCreator();
    }

    constructor(){
        super();
        this.NameChange = this.NameChange.bind(this);
        this.TimeChange = this.TimeChange.bind(this);
        this.CategoryChange = this.CategoryChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    } 

    NameChange(event){
        this.setState({cardName: event.target.value});
    }

    TimeChange(event){
        this.setState({cardTime: event.target.value});
    }

    CategoryChange(event){
        this.setState({cardCategory: event.target.value});
    }

    handleClick(){
        const {cardName, cardTime, cardCategory, cardsName, cardsTime, cardsCategory} = this.state;
        this.setState({
        cardName: "", cardTime: "", cardCategory: "",
        cardsName: [].concat(cardsName, cardName),
        cardsTime: [].concat(cardsTime, cardTime),
        cardsCategory: [].concat(cardsCategory, cardCategory)     
        });
    }

    divCreator(){
        let contentBox = {this.state.divCreator.map(divCreator=><div className="Cards-Box">
            <ul>
                {this.state.cardsName.map(cardName => <p key={cardName}><strong>Nome:</strong> {cardName}</p>)}
                {this.state.cardsTime.map(cardTime => <p key={cardTime}><strong>Tempo de Preparo:</strong> {cardTime}</p>)}
                {this.state.cardsCategory.map(cardCategory => <p key={cardCategory}><strong>Categoria:</strong> {cardCategory}</p>)}
            </ul>
        </div>)}
    }

    render(){
        return(
            <div className="escopo">
                <h1 className="title">Receitas</h1>
                <div className="InputsandButton">
                    <input className="Nome" type="text" placeholder="Nome" value={this.state.cardName} onChange={this.NameChange} />
                    <input className="Tempo"type="text" placeholder="Tempo de Preparo" value={this.state.cardTime} onChange={this.TimeChange} />
                    <input className="Categoria "type="text" placeholder="Categoria" value={this.state.cardCategory} onChange={this.CategoryChange} />
                    <button type="button" onClick={()=>{this.handleClick;this.divCreator;}}> <h1 className="button-title">Adicionar</h1></button>
                </div>
                <divCreator />
            </div>
        );
    }
}



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





*/