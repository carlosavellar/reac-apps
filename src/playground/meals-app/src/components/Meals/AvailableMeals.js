import MealItem from "./MealItem/MealItem";
import { DUMMY_MEALS } from "./../../store/dummy-meals";
import classes from "./AvailableMeals.module.css";

import Card from "./../UI/Card";

const AvailableMeals = (props) => {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => {
            return <MealItem key={meal.id} {...meal} />;
          })}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
