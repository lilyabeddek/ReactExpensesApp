import React, { useState } from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

function ExpenseList(props) {
    let arr = [];
    for (let i = 0; i < props.expenses.length; i++) {
        arr.push( <
            ExpenseItem title = { props.expenses[i].title }
            amount = { props.expenses[i].amount }
            date = { props.expenses[i].date } >
            < /ExpenseItem>
        );
    }
    const [yearFilter, setYearFilter] = useState("");
    const saveYearFilterHandler = (year) => {
        setYearFilter(year);
        console.log(year);
    };
    return ( <
        div className = "expenses" >
        <
        ExpensesFilter onSaveYearFilter = { saveYearFilterHandler }
        />{" "} <
        div > { arr } < /div>{" "} <
        /div>
    );
}

export default ExpenseList;