import React, { useState } from 'react';
import axios from 'axios';
import '../css/Home.css';
import {useNavigate} from 'react-router-dom';

const DepositComponent = () => {
    const [accountNo, setAccountNo] = useState('');
    const [customerAmount, setCustomerAmount] = useState('');
    const navigate=useNavigate();

    const handleDeposit = async () => {
        const amount= parseFloat(customerAmount);
        axios.post(`http://localhost:8080/api/deposit?accountNo=${accountNo}&amount=${amount}`)
           .then(response => {
               console.log(response.data);
               navigate('/userdashboard')
           })
           .catch(error => {
               console.error(error);
           });
    };

    return (
        <div className="form-container">
            <h2>Deposit</h2>
            <input type="text" placeholder="Customer ID" value={accountNo} onChange={(e) => setAccountNo(e.target.value)} />
            <input type="text" placeholder="Amount" value={customerAmount} onChange={(e) => setCustomerAmount(e.target.value)} />
            <button onClick={handleDeposit}>Deposit</button>
        </div>
    );
};

export default DepositComponent;
