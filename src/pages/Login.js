import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './Login.css';
import Main from '../dash/Main';

const Login = () => {
  const [loginFormLeft, setLoginFormLeft] = useState('60px');
  const [registerFormLeft, setRegisterFormLeft] = useState('-390px');
  const [btn, setbtn] = useState('0px');
  const handleRegister = () => {
    setLoginFormLeft('-390px');
    setRegisterFormLeft('50px');
    setbtn('110px');
  };

  const handleLogin = () => {
    setLoginFormLeft('60px');
    setRegisterFormLeft('450px');
    setbtn('0px');
  };
   
  const handleTogglePassword = (event) => {
    const passwords = document.querySelectorAll(".password");
    const type = event.target.checked ? "text" : "password";
    passwords.forEach(password => {
      password.type = type;
    });
  };
  <Routes><Route path="/dashboard" element={<Main/>}></Route></Routes>

  return (
    <div className="hero">
      <div className="form-box">
        <div className="button-box">
          <div id="btn" style={{left: btn}}></div>
          <button type="button" className="toggle-btn" onClick={handleLogin}>Log in</button>
          <button type="button" className="toggle-btn" onClick={handleRegister}><span>Register</span></button>
        </div>
        <form id="login" className="input-group" style={{ left: loginFormLeft }}>
          <input type="text" className="input-field" placeholder="Login" required />
          <input type="password" className="input-field password" id="password" placeholder="Enter Password" required />
          <input type="checkbox" className="check-box show" id="show" onChange={handleTogglePassword} />
          <label htmlFor="show">Show Password</label>
          <Link to="/dashboard"><button type="submit" className="submit-btn">Submit</button></Link>
        </form>
        <form id="register" className="input-group" style={{ left: registerFormLeft }}>
          <input type="text" className="input-field" placeholder="User ID" required />
          <input type="email" className="input-field" placeholder="Email ID" required />
          <input type="password" className="input-field password" placeholder="Enter Password" required />
          <input type="checkbox" className="check-box show" onChange={handleTogglePassword} />
          <label htmlFor="show">Show Password</label>
          <Link to="/dashboard"><button type="submit" className="submit-btn">Register</button></Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
