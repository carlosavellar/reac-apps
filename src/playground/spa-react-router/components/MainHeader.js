import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  return (
    <header className={classes.header}>
      <NavLink to="/" activeClassName="">
        Home
      </NavLink>
      {" - "}
      <NavLink to="/promotions" activeClassName="">
        Promotions
      </NavLink>
      {" - "}
      <NavLink to="/products">Products</NavLink>
    </header>
  );
};

export default MainHeader;
