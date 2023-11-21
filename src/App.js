// src/App.js

import React, { useState } from 'react';
import AddPurchaseForm from './components/AddPurchaseForm';
import PurchaseList from './components/PurchaseList';
import BudgetSummary from './components/BudgetSummary';
import './App.css';

function App() {
    const [purchases, setPurchases] = useState([]);
    const [budget, setBudget] = useState(1000);

    const handleAddPurchase = (newPurchase) => {
        setPurchases([...purchases, newPurchase]);
    };

    const handleBudgetChange = (newBudget) => {
        setBudget(newBudget);
    };

    return (
        <div className="container">
            <h1>Expense Tracker</h1>
            <AddPurchaseForm onAddPurchase={handleAddPurchase} />
            <PurchaseList purchases={purchases} />
            <BudgetSummary purchases={purchases} initialBudget={budget} onBudgetChange={handleBudgetChange} />
        </div>
    );
}

export default App;
