
import React, { useState } from 'react';
import '../css/RegisterAndLogin.css';
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

function Registration() {
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '', 
    userType: 'USER',
  });
  const [errors,setErrors]=useState({
    email: '', 
    phone: '',
    password: '',
    confirmPassword: '',
  });

const navigate=useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    const { email, phone} = formData;
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


    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      errorsCopy.password =
        'Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one special symbol, and one number.';
    } else {
      errorsCopy.password = '';
    }

    if (formData.confirmPassword !== formData.password) {
      errorsCopy.confirmPassword = 'Passwords do not match';
    } else {
      errorsCopy.confirmPassword = '';
    }
    setErrors(errorsCopy);
    console.log(formData);
    if((!errors.password && !errors.confirmPassword && !errors.phone && !errors.email))
    {
      try {
        const response = await axios.post('http://localhost:8080/api/register', {
          username: formData.username,
          phone: formData.phone,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
          userType: formData.userType,
        });

      const Type=await response.data;

      console.log(Type);

      if(Type==="USER")
      {
        alert('Registration successful');
        navigate('/userdashboard')
      }
      else if(Type==='ADMIN')
      {
        alert('Registration successful');
        navigate('/admindashboard')
      }
      else{
        alert('Invalid credentials');
      }
      } catch (error) {
        setErrors('An error occurred while processing your request');
      }
    }
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
  };
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    const re = /^[0-9]{10}$/;
    return re.test(String(phone));
  };

  return (
    <div className="registration-container">
      <h2>Register</h2>
      {/* {errors && <p>{errors}</p>} */}
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label>Phone Number:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
           {errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>} 
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {errors.confirmPassword && <span style={{ color: 'red' }}>{errors.confirmPassword}</span>}
        </div>
        <div className="form-group">
          <label>User Type:</label>
          <select
            name="userType"
            value={formData.userType}
            onChange={handleChange}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
      <p>
      Already registered User? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
}

export default Registration;
