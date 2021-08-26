import { Fragment, useState } from "react";
import Cart from "./Cart/Cart";
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";
import { DUMMY_MEALS } from "./../store/dummy_meals";

import "./App.css";

const App = (props) => {
  const [isCartShown, setIsCartShown] = useState(false);

  const closeCartHandler = () => {
    setIsCartShown(false);
  };

  const showCartHandler = () => {
    setIsCartShown(true);
  };

  return (
    <Fragment>
      {isCartShown && (
        <Cart onClose={closeCartHandler} onShow={props.showCartHandler} />
      )}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals meals={DUMMY_MEALS} />
      </main>
    </Fragment>
  );
};

export default App;
