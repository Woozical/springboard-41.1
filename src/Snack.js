import { NavLink } from "react-router-dom"

const Snack = (props) => {
  return (<div>
    <NavLink to="/">Back</NavLink>
    <h3>{props.name}</h3>
    <img src={props.image} alt={props.name} />
    <p>Calories: {props.calories}</p>
    <p>Price: {props.price}</p>
  </div>)
}

export default Snack