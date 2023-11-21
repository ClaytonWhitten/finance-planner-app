// src/components/PurchaseList.js

import React from 'react';
import '../App.css'; // Import styles from App.css

const PurchaseList = ({ purchases }) => {
    return (
        <div className="purchase-list">
            <h2>Purchase List</h2>
            <ul>
                {purchases.map((purchase, index) => (
                    <li key={index}>
                        {purchase.name} - ${purchase.amount.toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PurchaseList;
