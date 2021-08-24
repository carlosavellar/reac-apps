import React, { useRef, useState } from "react";

import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [isValidAmount, setIsValidAmount] = useState(true);

  const addItemAmountHandler = (e) => {
    // debugger;
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5 ||
      enteredAmountNumber > 5
    ) {
      setIsValidAmount(false);
    } else {
      props.addToCart(enteredAmountNumber);
    }
  };

  return (
    <form className={classes.form} onSubmit={addItemAmountHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">+ Add</button>
      {!isValidAmount && "Invalid amount body ☠️"}
    </form>
  );
};

export default MealItemForm;
