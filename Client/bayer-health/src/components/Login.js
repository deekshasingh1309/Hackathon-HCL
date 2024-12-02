import React, { useState } from "react";
import { Link } from "react-router-dom";

const login = () => {
  const [loginData, setLoginData] = useState({
    email_id: "",
    password: "",
  });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onButtonHandle = (e) => {
    e.preventDefault();
    const encryptedPassword = SHA256(loginData.password).toString();
    const updatedFormData = {
      ...loginData,
      password: encryptedPassword,
    };
    axios
      .post("http://localhost:5000/login", { updatedFormData })
      .then((response) => {
        console.log("Response from registration", response.data);
        history.push("/");
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

        <form onSubmit={() => onButtonHandle()}>
          <input
            type="email"
            placeholder="Email"
            value={form.email_id}
            required
            onChange={() => onHandleChange()}
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            required
            onChange={() => {
              onHandleChange();
            }}
          />
          <button class="login-btn" type="submit">
            Login
          </button>
        </form>
        <div class="links">
          <Link
            to={{
              pathname: "/registration",
            }}
          >
            New User? Register here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default login;
