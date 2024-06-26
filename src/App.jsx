import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";

import "./App.css";
import IncomeExpenses from "./components/IncomeExpenses";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";

import { GlobalProvider } from "./context/GlobalState";

const App = () => {
    return (
        <GlobalProvider>
            <Header />
            <div className="container">
                <Balance />
                <IncomeExpenses />
                <TransactionList />
                <AddTransaction />
            </div>
        </GlobalProvider>
    );
};

export default App;
