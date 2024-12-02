import React from "react";

const login = () => {
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
        <h1>Login</h1>
        <form>
          <input type="email" placeholder="Email" required="" />
          <input type="password" placeholder="Password" required="" />
          <button class="login-btn" type="submit">
            Login
          </button>
        </form>
        <div class="links">
          <a href="#">Forgot Password?</a>
          <br />
          <br />
          <a href="/register">New User? Register here</a>
        </div>
      </div>
    </div>
  );
};

export default login;
