import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/Home.css';

const AddCustomer = ({Type}) => {
    const navigate=useNavigate();
    const [CustomerDetails, setCustomerDetails] = useState({
      accountNo: '',
      username: '',
      phone: '',
      addharNo: '',
      email: '',
      dateOfBirth: '',
      customerAmount: 0.0,
      customer:'customer'
      });
      const [errors, setErrors] = useState({
        accountNo:'',
        phone:'',
        addharNo:'',
        email:''
      });

      const handleSubmit = async(e) => {
        e.preventDefault();
        const { email, phone} = CustomerDetails;
        const errorsCopy = { ...errors };
        if (!validateEmail(email)) {
          errorsCopy.email = 'Invalid email address';
        } else {
          errorsCopy.email = '';
        }
        if (!validatePhone(phone)) {
          errorsCopy.phone = 'Invalid phone number (10 digits required)';
        } else {
          errorsCopy.phone = '';
        }
        setErrors(errorsCopy);
    
        if(!errorsCopy.phone && !errorsCopy.email)
        {
          try {
            const response = await axios.post('http://localhost:8080/api/addcustomer', {
              accountNo:CustomerDetails.accountNo,
              username: CustomerDetails.username,
              phone: CustomerDetails.phone,
              addharNo:CustomerDetails.addharNo,
              email: CustomerDetails.email,
              dateOfBirth:CustomerDetails.dateOfBirth,
              customerAmount:CustomerDetails.customerAmount,
              customer:CustomerDetails.customer
            });

          const customer=response.data;
          if(customer==='customer'){
            navigate('/userdashboard')
          }
          else{
            console.log('Registration failed');
          }

          } catch (error) {
            console.log("error occured");
          }
        }
        setCustomerDetails({
          accountNo: '',
          username: '',
          phone: '',
          addharNo: '',
          email: '',
          dateOfBirth: '',
          customerAmount: 0.0,
          customer: ''
      });
      navigate('/userdashboard')
      };

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCustomerDetails({
          ...CustomerDetails,
          [name]: value,
        });
    }

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
      };
    
      const validatePhone = (phone) => {
        const re = /^[0-9]{10}$/;
        return re.test(String(phone));
      };

  return (
    <div className="form-container">
    <h2>Add Customer</h2>
     <form onSubmit={handleSubmit}>
            <label>Account Number:</label>
            <input type="text" name="accountNo" value={CustomerDetails.accountNo} onChange={handleInputChange} required /><br />
            <br />
            <label>Username:</label>
            <input type="text" name="username" value={CustomerDetails.username} onChange={handleInputChange} required /><br />
            <br />
            <label>Phone:</label>
            <input type="text" name="phone" value={CustomerDetails.phone} onChange={handleInputChange} required /><br />
            <br />
            <label>Aadhar Number:</label>
            <input type="text" name="addharNo" value={CustomerDetails.addharNo} onChange={handleInputChange} required /><br />
            <br />
            <label>Email:</label>
            <input type="email" name="email" value={CustomerDetails.email} onChange={handleInputChange} required /><br />
            <br />
            <label>Date of Birth:</label>
            <input type="date" name="dateOfBirth" value={CustomerDetails.dateOfBirth} onChange={handleInputChange} required /><br />
            <br />
            <label>Customer Amount:</label>
            <input type="number" name="customerAmount" value={CustomerDetails.customerAmount} onChange={handleInputChange} required /><br />
            <br />
            <button type="submit">Add Customer</button>
        </form>

    </div>
  )
}

export default AddCustomer
