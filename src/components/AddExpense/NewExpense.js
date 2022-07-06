import React, { useState } from "react";
import "./css/NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {

    const [showForm, setShowForm] = useState(0);

    const saveExpenseDataHandler = (enteredData) => {
        const newExpenseEntity = {
            ...enteredData,
            id: Math.random().toString(),
        };
        props.onSaveExpenseData(newExpenseEntity);
        setShowForm(0);
    };

    const addExpenseHandler = () => {
        setShowForm(1);
    }
    const cancelFormHandler = () => {
        setShowForm(0);
    }

    if (showForm === 0) {
        return ( < div className = "new-expense" >
            <
            button type = "submit"
            onClick = { addExpenseHandler } > Add Expense < /button>; < /
            div > );


    } else {
        return ( <
            div className = "new-expense" >
            <
            ExpenseForm oncancelForm = { cancelFormHandler }
            onSaveExpenseData = { saveExpenseDataHandler }
            />{" "} < /
            div >
        );
    }


}
export default NewExpense;