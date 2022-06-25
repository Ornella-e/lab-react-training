function DriverCard(props){

    return (
    <>
<p>{props.name}</p>
<p>{props.rating}</p>
<img src={props.img}/>
<p>{props.car.model}</p>
<p>{props.car.licensePlate}</p>
    </>
    )
}

export default DriverCard;