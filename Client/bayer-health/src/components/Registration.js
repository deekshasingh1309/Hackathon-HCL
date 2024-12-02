// Registration Form
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { SHA256 } from "crypto-js";
import "../App.css";
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "",
  });
  const navigate = useNavigate();
  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    // Here, you would typically send the data to your backend server
    // Encrypt the password
    const encryptedPassword = SHA256(formData.password).toString();
    const updatedFormData = {
      ...formData,
      password: encryptedPassword,
    };
    // Here, you would typically send the data to your backend server
    axios
    .post('http://localhost:5000/register', {updatedFormData})
    .then((response) => {
       console.log("Response from registration", response.data);
       navigate('/');
    })
  };

  /* 
 curl --location 'http://localhost:5000/register' \
--header 'Content-Type: application/json' \
--data-raw '{
    "user_name" : "rekha",
    "password" : "password",
    "email_id" :"babaurekha002691@gmail.com",
    "role" : 1
}'*/

  return (
    <div className="registration-container">
      <div class="logo">
        <img
          src="https://www.bayer.com/themes/custom/bayer_cpa/logo.svg"
          width="80"
          alt="Bayer Healthcare Logo"
        />
      </div>
      <h1>Register</h1>

      {/* User Type Selection */}
      <div>
        {/* <label>
          <input
            type="radio"
            value="patient"
            checked={userType === 'patient'}
            onChange={() => setUserType('patient')}
          />
          Patient
        </label>
        <label>
          <input
            type="radio"
            value="doctor"
            checked={userType === 'doctor'}
            onChange={() => setUserType('doctor')}
          />
          Doctor
        </label> */}
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="select-user-type">
          <label>
            Role:
            <select name="userType" id="userType">
              <option value="patient">Patient</option>
              <option value="provider">Health care provider</option>
            </select>
          </label>
        </div>
        {/* Conditional Fields for Doctor */}
        {/* {userType === 'doctor' && (
          <>
            <div>
              <label>
                Specialty:
                <input
                  type="text"
                  name="specialty"
                  value={formData.specialty}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Years of Experience:
                <input
                  type="number"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
          </>
        )} */}

        {/* Submit Button */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
