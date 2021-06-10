import "./styles.css"

function RedCard(props){
    return(
    <div className="rcName">
        <h1>Idade: {props.idade}</h1>
        <h1>Time: {props.time}</h1>
        <h1>Sobrenome: {props.sobrenome}</h1>
        
    </div>
    );

}

export default RedCard;