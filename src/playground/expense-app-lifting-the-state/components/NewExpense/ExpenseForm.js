import { useState, useEffect } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [isAddExForm, setIsAddExForm] = useState(false);
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
    e.preventDefault();
    props.onAddExpense({
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    });
  };

  const toggleNewExpenseForm = () => {
    setIsAddExForm(true);
  };

  const addNewJSXExpenseButton = (
    <div className="news-expense__control">
      <button onClick={toggleNewExpenseForm}>Add New Expense</button>
    </div>
  );

  useEffect(() => {
    console.table(isAddExForm);
  }, [isAddExForm]);

  let formAddExpense = (
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
        <button
          onClick={(e) => {
            console.log(e);
            setIsAddExForm(false);
          }}
        >
          Cancel
        </button>
        <div className="news-expense__control">
          <button onClick={toggleNewExpenseForm}>Cancel</button>
        </div>
        <div className="news-expense__control">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
  let formExpense = "";
  formExpense = isAddExForm ? formAddExpense : addNewJSXExpenseButton;

  return formExpense;
};

export default ExpenseForm;
