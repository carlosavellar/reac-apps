import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredValueIsTouched, setEnteredValueIsTouched] = useState(false);
  const [valueIsValid, setFirstValueIsValid] = useState(true);

  const enteredValueIsValid = validateValue(enteredValue);
  const inputError = !enteredValueIsValid && enteredValueIsTouched;

  const valueChangeHandler = (evt) => {
    setEnteredValue(evt.target.value);
  };

  const inputValueBlurHandler = () => {
    setEnteredValueIsTouched(true);
  };

  const resetInput = () => {
    setEnteredValue("");
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    valueChangeHandler,
    inputValueBlurHandler,
    inputError,
    reset: resetInput,
  };
};

export default useInput;
