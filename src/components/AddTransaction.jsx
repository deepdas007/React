import React, { useState } from "react";

const AddTransaction = () => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

    const submitForm = (e) => {
        e.preventDefault();

        const formLayout = {
            text,
            amount,
        };

        console.log(formLayout);
    };

    return (
        <>
            <h3>Add new transaction</h3>
            <form id="form" onSubmit={submitForm}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input
                        type="text"
                        id="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Enter text..."
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
                        (negative - expense, positive - income)
                    </label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount..."
                    />
                </div>
                <button type="submit" className="btn">
                    Add transaction
                </button>
            </form>
        </>
    );
};

export default AddTransaction;
