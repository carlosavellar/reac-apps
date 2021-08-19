import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input";

const emailReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_VALUE":
      return { value: action.val, isValid: action.val.includes("@") };
    case "INPUT_BLUR":
      return { value: state.value, isValid: action.val.includes("@") };
    case "INPUT_CLEAR":
      return { value: "", isValid: null };
    default:
      return state;
  }
};

const passwordReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_VALUE":
      return { value: action.val, isValid: state.value.trim().length > 6 };
    case "INPUT_BLUR":
      return { value: state.value, isValid: state.value.trim().length > 6 };
    case "INPUT_CLEAR":
      return { value: "", isValid: null };
    default:
      return state;
  }
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
    clear: "",
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
    clear: "",
  });

  useEffect(() => {
    console.log("EFFECT RUNNING");

    return () => {
      console.log("EFFECT CLEANUP");
    };
  }, []);

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity!");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log("CLEANUP");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "INPUT_VALUE", val: event.target.value });

    dispatchEmail({ type: "INPUT_ BLUR" });

    // setFormIsValid(
    //   emailState.value.includes("@") && enteredPassword.trim().length > 6
    // );
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({ type: "INPUT_VALUE", val: event.target.value });

    // setFormIsValid(
    //   emailState.isV&& event.target.value.trim().length > 6
    // );
  };

  const validateEmailHandler = () => {
    dispatchEmail(emailState.value.includes("@"));
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
    dispatchEmail({ type: "INPUT_CLEAR" });
    dispatchPassword({ type: "INPUT_CLEAR" });
  };
  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          label="E-mail"
          inputType="email"
          id="email"
          inputState={emailState}
          inputOnChange={emailChangeHandler}
          inputValidation={validateEmailHandler}
          classes={classes}
        />

        <Input
          label="Password"
          inputType="password"
          id="password"
          inputState={passwordState}
          inputOnChange={passwordChangeHandler}
          inputValidation={validatePasswordHandler}
          classes={classes}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
