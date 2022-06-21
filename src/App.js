import logo from "./logo.svg";
import React, { useState } from "react"
import "./App.css";
import ExpensesList from "./components/Expenses/ExpensesList";
import NewExpense from "./components/AddExpense/NewExpense";


function App() {
    const expenses = [{
            id: "e1",
            title: "Toilet Paper",
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
        {
            id: "e3",
            title: "Car Insurance",
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: "e4",
            title: "New Desk (Wooden)",
            amount: 450,
            date: new Date(2021, 5, 12),
        },
    ];

    const [expensesList, expensesListHandler] = useState(expenses);
    const [expensesFiltered, expensesFilteredHandler] = useState(expenses)

    const onSaveExpenseDataHandler = (enteredData) => {
        console.log(enteredData);
        expensesListHandler((prevState) => {
            return [enteredData, ...prevState];
        })
        console.log(expensesList);
    };

    const onFilterDataHandler = (year) => {
        expensesFilteredHandler(expensesList.filter(expense => expense.date.getFullYear() == year))

    }
    return ( <
        div className = "App" >
        <
        NewExpense onSaveExpenseData = { onSaveExpenseDataHandler }
        />{" "}  <
        ExpensesList onFilterData = { onFilterDataHandler }
        expenses = { expensesFiltered }
        />{" "} < /
        div >
    );
}

export default App;