import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import mealsImg from "./../../assets/meals.jpg";
// import { CartContext } from "../store/CartContext";
const Header = (props) => {
  // const cartCtx = useContext(CartContext);
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShowCart={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="Meals" />
      </div>
    </Fragment>
  );
};

export default Header;
