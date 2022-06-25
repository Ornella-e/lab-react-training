function IdCard(props){
   
    return(
        <div className="id-card">
<p>lastName: {props.lastName} </p>
<p>firstName: {props.firstName} </p>
<p>gender:  {props.gender} </p>
<p>height: {props.height}</p>
<p>birth: {props.birth}</p>
<img src={props.picture}/>
</div>
    )
};

export default IdCard;