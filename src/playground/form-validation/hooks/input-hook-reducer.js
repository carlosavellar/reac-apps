import { useReducer } from "react";

// initial this.state.
const INITIAL_STATE = {
  value: "",
  isTouched: false,
};

// reducer
const inputStateReducer = (state, action) => {
  switch (action.type) {
    case "INPUT":
      return { value: action.value, isTouched: state.isTouched };
    case "BLUR":
      return { value: state.value, istTouch: !state.isTouched };
    case "RESET":
      return { value: "", isTouch: false };
    default:
      return state;
  }
};

// set the actions types if with switch

const useInput = (validateValue) => {
  // call the reducer with state and dispatch
  const [inputState, dispatch] = useReducer(inputStateReducer, INITIAL_STATE);

  const valueInputIsValid = validateValue(inputState.value);
  const inputError = !valueInputIsValid && inputState.isTouched;

  // create the action handler returning the input value
  const valueInputHandler = (evt) => {
    dispatch({
      type: "INPUT",
      value: evt.target.value,
    });
  };

  // create the blur action setting the setting
  const inputBlurHandler = () => {
    dispatch({
      type: "BLUR",
    });
  };

  // action resetting the value is the value is touched to false
  const resetValue = () => {
    dispatch({
      type: "RESET",
    });
  };

  return {
    value: inputState.value,
    isValid: inputState.isValid,
    inputError,
    valueInputHandler,
    inputBlurHandler,
    reset: resetValue,
  };
};

export default useInput;
