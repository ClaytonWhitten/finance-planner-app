// src/components/BudgetSummary.js

import React, { useState } from 'react';
import '../App.css'; // Import styles from App.css

const BudgetSummary = ({ purchases, initialBudget, onBudgetChange }) => {
    const [budget, setBudget] = useState(initialBudget);

    const totalSpent = purchases.reduce((total, purchase) => total + purchase.amount, 0);
    const remainingBudget = budget - totalSpent;

    const handleBudgetChange = () => {
        onBudgetChange(parseFloat(budget));
    };

    return (
        <div className="budget-summary">
            <h2>Budget Summary</h2>
            <div>
                <label htmlFor="budget">Budget:</label>
                <input
                    type="number"
                    id="budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                />
                <button onClick={handleBudgetChange}>Update Budget</button>
            </div>
            <p>Total Spent: ${totalSpent.toFixed(2)}</p>
            <p>Remaining Budget: ${remainingBudget.toFixed(2)}</p>
        </div>
    );
};

export default BudgetSummary;
