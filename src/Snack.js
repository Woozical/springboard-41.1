import { NavLink } from "react-router-dom";
import "./Snack.css";

const toTitleCase = (str) => {
  return (str[0].toUpperCase() + str.slice(1));
}

const Snack = (props) => {
  return (
    <div className="Snack">
      <h3>{toTitleCase(props.name)}</h3>
      <img className="Snack-image" src={props.image} alt={props.name} />
      <p>Calories: {props.calories}</p>
      <p>Price: ${props.price}</p>
      <NavLink to="/">Back</NavLink>
    </div>)
}

export default Snack