import React, { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "./../../store/cart-context";

const HeaderCartButton = (props) => {
  const mealCtx = useContext(CartContext);

  const numberOfCartItems = mealCtx.items.reduce((currentItem, item) => {
    debugger;
    return currentItem + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
