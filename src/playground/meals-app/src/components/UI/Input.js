import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label>{props.label}</label>
      <input ref={ref} type={props.type} {...props.input} />
    </div>
  );
});
export default Input;
