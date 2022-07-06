import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';

function Expenses(props) {

    const [yearFilter, setYearFilter] = useState("2022");
    const saveYearFilterHandler = (year) => {
        console.log(year)
        setYearFilter(year);
    };

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === yearFilter;
    });



    return ( <
        div className = "expenses" >
        <
        ExpensesFilter selected = { yearFilter }
        onSaveYearFilter = { saveYearFilterHandler }
        />{" "} 

        <
        ExpensesChart expenses = { filteredExpenses }
        />

        <
        ExpensesList items = { filteredExpenses } > < /ExpensesList> < /
        div >
    );
}

export default Expenses;