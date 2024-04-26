import './ResCards.css'

export default function ResCards(props) {
    const{image}=props
    const { restaurant_name } = props.data
    return (
        <div className="dis" 
         onClick={props.onClick}>
            <img src={image} ></img>
            <h3>{restaurant_name}</h3>
           
        </div>
    )
}
