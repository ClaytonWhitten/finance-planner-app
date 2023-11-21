// src/components/AddPurchaseForm.js

import React, { useState } from 'react';
import '../App.css'; // Import styles from App.css

const AddPurchaseForm = ({ onAddPurchase }) => {
    const [purchaseName, setPurchaseName] = useState('');
    const [purchaseAmount, setPurchaseAmount] = useState('');

    const handleAddPurchase = () => {
        if (!purchaseName || !purchaseAmount) {
            alert('Please enter both purchase name and amount.');
            return;
        }

        const newPurchase = {
            name: purchaseName,
            amount: parseFloat(purchaseAmount),
        };

        onAddPurchase(newPurchase);

        // Clear input fields
        setPurchaseName('');
        setPurchaseAmount('');
    };

    return (
        <div className="add-purchase-form">
            <h2>Add Purchase</h2>
            <div>
                <label htmlFor="purchaseName">Purchase Name:</label>
                <input
                    type="text"
                    id="purchaseName"
                    value={purchaseName}
                    onChange={(e) => setPurchaseName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="purchaseAmount">Amount:</label>
                <input
                    type="number"
                    id="purchaseAmount"
                    value={purchaseAmount}
                    onChange={(e) => setPurchaseAmount(e.target.value)}
                />
            </div>
            <button onClick={handleAddPurchase}>Add Purchase</button>
        </div>
    );
};

export default AddPurchaseForm;
