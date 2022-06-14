import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
    const saveExpenseDataHandler = (enteredData) => {
        const newExpenseEntity = {
            ...enteredData,
            id: Math.random().toString(),
        };
        props.onSaveExpenseData(newExpenseEntity);
    };
    return ( <
        div className = "new-expense" >
        <
        ExpenseForm onSaveExpenseData = { saveExpenseDataHandler }
        />{" "} < /
        div >
    );
}
export default NewExpense;