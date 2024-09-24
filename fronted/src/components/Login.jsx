import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/styles.css'; // Import CSS file from the styles folder

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://shiva-loginform-backend.onrender.com/user/login', { email, password });
      
      console.log(response.data);
      if (response.data.code === 200) {
        alert('User Login Successfully');
        // navigate to home or dashboard page after successful login
        navigate('/dashboard');
      }
    } catch (error) {
      console.error(error.response.data);
      alert(error.response.data.message);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Login Form</h2>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
        </div>
        <div className="form-group">
          <button type="submit">Login</button>
        </div>
      </form>
      <p>D'ont have an account? <Link to={'/register'}>Register here</Link></p>
    </div>
  );
};

export default Login;
