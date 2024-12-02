// Registration Form
import React, { useEffect, useState } from 'react';
import axios from 'axios';
const RegistrationForm = () => {
  const [userType, setUserType] = useState('patient'); // Default to 'patient'
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

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
    console.log('Form submitted with data:', formData);
    // Here, you would typically send the data to your backend server
    axios
    .get('http://localhost:5000/register')
    .then((response) => {
        formData(response.data);
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
        <div>
          <label>
            User type:
            <select name="userType" id="userType">
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
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
  