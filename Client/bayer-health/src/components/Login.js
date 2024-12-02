import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import axios from 'axios';
import { SHA256 } from "crypto-js";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email_id: "",
    password: "",
  });
  const navigate = useNavigate();
    const onHandleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const encryptedPassword = SHA256(loginData.password).toString();
    const updatedFormData = {
      ...loginData,
      password: encryptedPassword,
    };
    axios
      .post("http://localhost:5000/login", { ...updatedFormData })
      .then((response) => {
        console.log("Response from registration", response.data);
        navigate('/dashboard');
      });
  };

  return (
    <div class="login-container">
      <div class="login-card">
        <div class="logo">
          <img
            src="https://www.bayer.com/themes/custom/bayer_cpa/logo.svg"
            width="80"
            alt="Bayer Healthcare Logo"
          />
        </div>
        <h1 class="logo">Login</h1>

        <form onSubmit={handleSubmit}> 
          <input
            type="email"
            name="email_id"
            placeholder="Email"
            value={loginData.email_id}
            required
            onChange={(e) => onHandleChange(e)}
          />
          <input  
            type="password"
            name="password"
            placeholder="Password"
            value={loginData.password}
            required
            onChange={(e) => {
              onHandleChange(e);
            }}
          />
          <button class="login-btn" type="submit">
            Login
          </button>
        </form>
        <div class="links">
          <Link
            to={{
              pathname: "/register",
            }}
          >
            New User? Register here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
