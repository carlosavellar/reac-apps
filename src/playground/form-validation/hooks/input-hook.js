import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const valueInputIsValid = validateValue(enteredValue);
  const hasError = !valueInputIsValid && isTouched;

  const valueInputHandler = (evt) => {
    setEnteredValue(evt.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const resetValue = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    valueIsValid: valueInputIsValid,
    hasError,
    valueInputHandler,
    inputBlurHandler,
    reset: resetValue,
  };
};

export default useInput;
