import { useState, useEffect } from "react";
import useInput from "./../hooks/input-hook";

const SimpleInput = (props) => {
  const {
    value: enteredNameValue,
    hasError: nameHasError,
    valueIsValid: nameIsValid,
    valueInputHandler: nameInputHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameValue,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmailValue,
    hasError: emailHasError,
    valueIsValid: emailIsValidm,
    valueInputHandler: emailInputHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.includes("@") && !"");

  let formIsValid = false;

  if (nameIsValid && enteredNameValue) {
    formIsValid = true;
  }

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (!enteredNameValue) {
      return;
    }

    resetNameValue();
    resetEmail();
  };

  const validClass = nameIsValid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={handlerSubmit}>
      <div className={validClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          onBlur={nameBlurHandler}
          id="name"
          value={enteredNameValue}
          onChange={nameInputHandler}
        />
      </div>
      {nameHasError && (
        <p style={{ color: "red" }}>
          <strong>Name</strong> Is not valid!
        </p>
      )}
      <div className={validClass}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          onBlur={emailBlurHandler}
          id="email"
          value={enteredEmailValue}
          onChange={emailInputHandler}
        />
      </div>

      {emailHasError && (
        <p style={{ color: "red" }}>
          <strong>Email</strong> Is not valid!
        </p>
      )}
      <div className="form-actions">
        <button disabled={!formIsValid} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
