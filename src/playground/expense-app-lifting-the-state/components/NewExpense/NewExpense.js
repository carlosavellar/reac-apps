import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  return (
    <div className="new-expense">
      <ExpenseForm onAddExpense={props.onAddNewExpense} />
    </div>
  );
};
export default NewExpense;
