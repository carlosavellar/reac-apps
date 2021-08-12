import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  let expensesContent = <p>NO FUCKING EXPENSES"</p>;

  if (props.items.length > 0) {
    expensesContent = props.items.map((item) => {
      return (
        <ExpenseItem
          key={Math.random() * 3}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      );
    });
  }

  return <ul>{expensesContent}</ul>;
};

export default ExpenseList;
