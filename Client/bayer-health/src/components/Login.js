import React from "react";
import { Link } from "react-router-dom";

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
        <h1 class="logo">Login</h1>
        <form>
          <input type="email" placeholder="Email" required="" />
          <input type="password" placeholder="Password" required="" />
          <button class="login-btn" type="submit">
            <Link to={{ pathname: "/login" }}>Login</Link>
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
