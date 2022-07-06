import React, { useState } from "react";
import "./css/ExpenseForm.css";

function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    const titleChangeHnadler = (event) => {
        setEnteredTitle(event.target.value);
        console.log(event.target.value);
    };
    const amountChangeHnadler = (event) => {
        setEnteredAmount(event.target.value);
        console.log(event.target.value);
    };
    const dateChangeHnadler = (event) => {
        setEnteredDate(event.target.value);
        console.log(event.target.value);
    };
    const submitFormHnadler = (event) => {
        event.preventDefault();
        const untity = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
        props.onSaveExpenseData(untity);
    };

    const cancelActionHandler = (event) => {
        props.oncancelForm();
    };
    return ( <
        form onSubmit = { submitFormHnadler } >
        <
        div className = "new-expense__controls" >
        <
        div className = "new-expense__control" >
        <
        label > Tite < /label>{" "} <
        input type = "text"
        value = { enteredTitle }
        onChange = { titleChangeHnadler }
        />{" "} <
        /div>{" "} <
        div className = "new-expense__control" >
        <
        label > Amout < /label>{" "} <
        input type = "number"
        value = { enteredAmount }
        min = "0.01"
        step = "0.1"
        onChange = { amountChangeHnadler }
        />{" "} <
        /div>{" "} <
        div className = "new-expense__control" >
        <
        label > Date < /label>{" "} <
        input type = "date"
        min = "2019-01-01"
        max = "2022-12-31"
        value = { enteredDate }
        onChange = { dateChangeHnadler }
        />{" "} <
        /div>{" "} <
        /div>{" "} <
        div className = "new-expense__actions" >
        <
        button type = "submit" > Add Expense < /button>{" "} <
        button onClick = { cancelActionHandler } > Cancel < /button> <
        /div>{" "} <
        /form>
    );
}
export default ExpenseForm;