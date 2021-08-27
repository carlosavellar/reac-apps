import { useState, useEffect } from "react";
import Cart from "./Cart/Cart";
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";
import ContextProvider from "./../store/CartContext";
import { DUMMY_MEALS } from "./../store/dummy_meals";

import "./App.css";

const App = (props) => {
  const [isCartShown, setIsCartShown] = useState(false);
  const [meals, setMeals] = useState([]);

  const closeCartHandler = () => {
    setIsCartShown(false);
  };

  const showCartHandler = () => {
    setIsCartShown(true);
  };

  useEffect(() => {
    console.log(DUMMY_MEALS);
    setMeals(DUMMY_MEALS);
  }, []);

  return (
    <ContextProvider>
      {isCartShown && (
        <Cart onClose={closeCartHandler} onShow={props.showCartHandler} />
      )}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals meals={meals} />
      </main>
    </ContextProvider>
  );
};

export default App;
