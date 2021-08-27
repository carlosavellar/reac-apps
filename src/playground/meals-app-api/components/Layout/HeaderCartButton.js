import { useContext, useEffect, useState } from "react";
import CartContext from "./../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const items = cartCtx.items;

  const countItems = items.reduce((current, item) => {
    return (current += +item.amount);
  }, 0);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
  }, [items]);

  return (
    <button className={classes.button} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{countItems}</span>
    </button>
  );
};

export default HeaderCartButton;
