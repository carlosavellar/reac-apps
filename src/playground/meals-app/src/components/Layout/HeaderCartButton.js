import React, { useContext, useState, useEffect } from "react";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "./../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnIsHighLighted, setBtnIsHighLighted] = useState(false);
  const mealCtx = useContext(CartContext);

  const items = mealCtx.items;

  const numberOfCartItems = items.reduce((currentItem, item) => {
    return currentItem + item.amount;
  }, 0);

  let btnClasses = `${classes.button}  ${btnIsHighLighted ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighLighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighLighted(false);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
