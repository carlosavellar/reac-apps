import classes from "./MealItem.module.css";

const MealItem = (props) => {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>R$ {props.price}</div>
      </div>
      <div>
        <button>Add</button>
      </div>
    </li>
  );
};

export default MealItem;
