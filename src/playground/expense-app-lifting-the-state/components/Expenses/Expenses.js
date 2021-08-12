import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import ExpenseList from "./ExpenseList";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredYearHandler = (loadYear) => {
    setFilteredYear((prevState) => ({ prevState: loadYear }));
  };

  const filterYearExpense = props.items.filter((expense) => {
    return (
      new Date(expense.date).getFullYear().toString() === filteredYear.prevState
    );
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesChart expenses={filterYearExpense} />
        <ExpensesFilter onGetExpenseYear={filteredYearHandler} />
        <ExpenseList items={filterYearExpense} />
      </Card>
    </div>
  );
};

export default Expenses;
