import "./styles.css"

function BlackCard(props){
    return(
        <div className="bcName"> 
            <h1 className="letter"> {props.name} </h1> 
        </div>
    );
}
export default BlackCard;
