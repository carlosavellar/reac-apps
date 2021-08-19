import React, { useRef } from "react";

const Input = (props) => {
  const inputRef = useRef();

  return (
    <div
      className={`${props.classes.control} ${
        props.inputState.isValid === false ? props.classes.invalid : ""
      }`}
    >
      <label htmlFor="email">{props.label}</label>
      <input
        ref={useRef}
        type={props.inputType}
        id={props.id}
        value={props.inputState.value}
        onChange={props.inputOnChange}
        onBlur={props.inputValidation}
      />
    </div>
  );
};
export default Input;
