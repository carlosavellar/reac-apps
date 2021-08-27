import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const inputAmountRef = useRef();
  const [isFormValid, setIsFormValid] = useState(true);
  const addCartItemHandler = (e) => {
    debugger;
    e.preventDefault();
    const countAmount = inputAmountRef.current.value;
    const enteredAmount = parseInt(countAmount);
    console.log(parseInt(countAmount));
    if (countAmount.trim() === 0 || enteredAmount < 1 || enteredAmount > 5) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
    props.addItemToCard(parseInt(countAmount));
  };

  return (
    <form className={classes.form} onSubmit={addCartItemHandler}>
      <Input
        label="Amount"
        ref={inputAmountRef}
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">+ Add</button>
      {!isFormValid ? <p>Not allowed more that 5 or less than 1</p> : ""}
    </form>
  );
};

export default MealItemForm;
