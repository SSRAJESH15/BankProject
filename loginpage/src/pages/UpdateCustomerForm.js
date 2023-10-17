import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UpdateCustomerForm = () => {
    const [accountNo, setAccountNo] = useState('');
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [addharNo, setAddharNo] = useState('');
    const [phone, setPhone] = useState('');
    const navigate=useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(`http://localhost:8080/api/customers/update/${accountNo}`, {username, email, addharNo, phone});
            console.log('Customer updated:', response.data);

        } catch (error) {
            console.error('Error updating customer:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Customer ID:
                <input type="text" value={accountNo} onChange={(e) => setAccountNo(e.target.value)} />
            </label>
            <label>
                Name:
                <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} />
            </label>
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
                AddharNo:
                <input type="text" value={addharNo} onChange={(e) => setAddharNo(e.target.value)} />
            </label>
            <label>
                Phone:
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </label>
            <button type="submit">Update Customer</button>
        </form>
    );
};

export default UpdateCustomerForm;
