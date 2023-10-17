import React, { useState } from 'react';
import axios from 'axios';
import '../css/Home.css';
import {useNavigate} from 'react-router-dom';

const WithdrawComponent = () => {
    const [accountNo, setAccountNo] = useState('');
    const [customerAmount, setCustomerAmount] = useState('');
    const navigate=useNavigate();

    const handleWithdraw = async () => {
        // try {
            
        //     const response = await axios.post('http://localhost:8080/api/withdraw', {accountNo:accountNo,  amount});
        //     console.log('Withdrawal Successful:', response);
        //     navigate('/userdashboard')
        //     // Handle success
        // } catch (error) {
        //     console.error('Withdrawal Failed:', error);
        //     // Handle error
        // }
         const amount= parseFloat(customerAmount);
         axios.post(`http://localhost:8080/api/withdraw?accountNo=${accountNo}&amount=${amount}`)
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
        <h2>Withdraw</h2>
        <label>Account Number:</label>
        <input type="text" value={accountNo} onChange={(e) => setAccountNo(e.target.value)} required/>
        <label>Withdraw Amount:</label>
        <input type="text" value={customerAmount} onChange={(e) => setCustomerAmount(e.target.value)} required/>
        <button onClick={handleWithdraw}>Withdraw</button>
    </div>
    );
};

export default WithdrawComponent;
