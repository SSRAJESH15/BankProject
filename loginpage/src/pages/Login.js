import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/RegisterAndLogin.css';

function Login() {
  const [LoginData, setLoginData] = useState({
    username: '',
    email:'',
    password: '',
    userType:'USER'
  });
  
  const [error, setError] = useState({
    email: '', 
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name,value} = e.target;
    setLoginData({
      ...LoginData,
      [name]: value,
    });
  };
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(LoginData.email)) {
      setError.email = 'Invalid email address';
    } else {
      setError.email = '';
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/;
    if (!passwordRegex.test(LoginData.password)) {
      LoginData.password =
        'Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one special symbol, and one number.';
    } else {
      setError.password = '';
    }
    console.log(LoginData);
    if((!error.password && !error.email))
    {
    try 
    {
      const response = await axios.post('http://localhost:8080/api/login', {
        username: LoginData.username,
        email: LoginData.email,
        password: LoginData.password,
        userType: LoginData.userType,
      });

      const Type=await response.data;
      console.log(Type);
      
      if(Type==="USER")
      {
        alert('Login successful!');
        navigate('/userdashboard')
      }
      else if(Type==='ADMIN')
      {
        alert('Login successful!');
        navigate('/admindashboard')
      }
      else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while processing your request');
    }
  }
  else{
    alert('invalid password and email');
  }
} 

  return (
    <div className="registration-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={LoginData.username}
          onChange={handleChange}
        />
        </div>
        <div className="form-group">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={LoginData.email}
          onChange={handleChange}
        />
        {error.email && <span style={{ color: 'red' }}>{error.email}</span>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={LoginData.password}
            onChange={handleChange}
            required
          />
          {error.password && <span style={{ color: 'red' }}>{error.password}</span>}
        </div>
        <div className="form-group">
          <label>User Type:</label>
          <select
            name="userType"
            onChange={handleChange}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
          </select>
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don’t have an account? <Link to="/register">Sign up</Link>
      </p>
    </div>
  );
}
export default Login;

