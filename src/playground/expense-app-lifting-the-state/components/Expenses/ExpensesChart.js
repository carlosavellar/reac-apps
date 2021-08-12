import React from "react";
import Chart from "./../Chart/Chart";

const ExpensesChart = (props) => {
  const chartExpenses = [
    { label: "Jan", value: 0 },
    { label: "Fev", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonths = expense.date.getMonth();
    chartExpenses[expenseMonths].value += expense.amount;
  }

  return (
    <div>
      <Chart dataPoints={chartExpenses} />
    </div>
  );
};

export default ExpensesChart;

//ExpenseChart;

// Create new component called ExpenseChart
// Create an months array, each month one object and a values
// loop through all months of the array
// Store the results into a var
// For each object array property value store the expense value
// each value is equal itself plus the expense amount
