import React, { Fragment } from "react";

import MealsSummary from "./MealsSummary";
// import classes from "./Meals.module.css";
import AvailableMeals from "./AvailableMeals";

const Meals = (props) => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
