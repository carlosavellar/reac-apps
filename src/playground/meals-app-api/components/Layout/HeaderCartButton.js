import { useContext, useEffect, useState } from "react";
import CartContext from "./../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [isButtonHightLighted, setIsButtonHightLighted] = useState(false);

  const cartCtx = useContext(CartContext);

  const items = cartCtx.items;

  const countItems = items.reduce((current, item) => {
    return (current += +item.amount);
  }, 0);

  const btnClass = `${classes.button} ${isButtonHightLighted && classes.bump}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsButtonHightLighted(true);

    const timer = setTimeout(() => {
      setIsButtonHightLighted(false);
    }, 350);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClass} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{countItems}</span>
    </button>
  );
};

export default HeaderCartButton;
