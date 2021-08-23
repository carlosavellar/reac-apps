import React, { Fragment, useState, useEffect } from "react";

import Header from "./Layout/Header";
import Meals from "./Meals/Meals";
import Cart from "./Cart/Cart";
import { DUMMY_MEALS } from "./../store/dummy-meals";
import "./App.css";
const App = (props) => {
  const [isCartShown, setIsCartShown] = useState(false);
  const [meals, setMeals] = useState([]);
  const closeCartHandler = () => {
    setIsCartShown(false);
  };

  const showCartHandler = () => {
    debugger;
    console.log("www");
    setIsCartShown(true);
  };
  // const cartCtx = useContext(CartContext);

  useEffect(() => {
    setMeals(DUMMY_MEALS);
  }, []);

  return (
    <Fragment>
      {isCartShown && (
        <Cart onClose={closeCartHandler} onShow={props.showCartHandler} />
      )}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals meals={meals} />
      </main>
    </Fragment>
  );
};

export default App;
