import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpenseList(props) {
    let arr = [];
    for (let i = 0; i < props.expenses.length; i++) {
        arr.push( <
            ExpenseItem title = { props.expenses[i].title }
            amount = { props.expenses[i].amount }
            date = { props.expenses[i].date } >
            <
            /ExpenseItem>
        );
    }
    return <div className = "expenses" > { arr } < /div>;
}

export default ExpenseList;