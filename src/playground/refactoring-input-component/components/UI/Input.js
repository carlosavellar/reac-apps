import React, { useRef, useImperativeHandle, forwardRef } from "react";

const Input = (props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  // useImperativeHandle(ref, () => ({
  //   focus: activate,
  // }));

  return (
    <div
      className={`${props.classes.control} ${
        props.inputState.isValid === false ? props.classes.invalid : ""
      }`}
    >
      <label htmlFor="email">{props.label}</label>
      <input
        ref={inputRef}
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
