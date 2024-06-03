import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";

import "./App.css";
import IncomeExpenses from "./components/IncomeExpenses";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";

const App = () => {
    return (
        <>
            <Header />
            <div className="container">
                <Balance />
                <IncomeExpenses />
                <TransactionList />
                <AddTransaction />
            </div>
        </>
    );
};

export default App;
