function Greetings(props){
    return(
    <div className="grettings">
        <p>{props.lang.de}</p>
        <p>{props.lang.fr}</p>
        <p> {props.lang.en}</p>
        <p> {props.lang.es}</p>
        <p>{props.children}</p>
    </div>
    )
}

export default Greetings;