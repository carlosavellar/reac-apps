import React, { Fragment, useContext } from "react";

import Header from "./Layout/Header";
import Meals from "./Meals/Meals";
import Cart from "./Cart/Cart";
import { CartContext } from "../store/CartContext";
import "./App.css";
function App() {
  // const [isCartShown, setIsCartShown] = useState(false);

  // const closeCartHandler = () => {
  //   setIsCartShown(false);
  // };

  // const showCartHandler = () => {
  //   debugger;
  //   console.log("www");
  //   setIsCartShown(true);
  // };
  const cartCtx = useContext(CartContext);
  return (
    <Fragment>
      {cartCtx.isCartShown && (
        <Cart
          onClose={cartCtx.closeCartHandler}
          onShow={cartCtx.showCartHandler}
        />
      )}
      <Header onShowCart={cartCtx.onShowCart} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
