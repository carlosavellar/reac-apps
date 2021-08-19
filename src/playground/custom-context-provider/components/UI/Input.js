import React from "react";
import classes from "./../Login/Login.module.css";
import { useInput } from "rooks";

const Input = (props) => {
  return (
    <div
      className={`${props.classes.control} ${
        props.inputState.isValid === false ? props.classes.invalid : ""
      }`}
    >
      <label htmlFor="email">E-Mail</label>
      <input
        type={props.type}
        id={props.id}
        value={props.inputState}
        onChange={props.validatePasswordHandler}
        onBlur={props.onBlurInput}
        classes={classes}
      />
    </div>
  );
};

export default Input;
