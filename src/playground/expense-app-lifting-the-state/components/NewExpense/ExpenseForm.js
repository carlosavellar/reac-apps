import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [stateInput, setStateInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const enteredDateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const onSubmitExpenseHandler = (e) => {
    debugger;
    e.preventDefault();
    props.onAddExpense({
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
    });
  };

  return (
    <form onSubmit={onSubmitExpenseHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="01-08-2021"
            max="31-12-2021"
            onChange={enteredDateChangeHandler}
          />
        </div>
        <div className="news-expense__control">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
