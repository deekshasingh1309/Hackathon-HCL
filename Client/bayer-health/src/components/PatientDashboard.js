// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './App.css';

const PatientDashboard=()=> {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch appointments from the backend API
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/appointments')
      .then((response) => {
        setAppointments(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Error fetching data');
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>Patient Dashboard</h1>
      {/* {loading && <p>Loading appointments...</p>}
      {error && <p>{error}</p>}
      <div className="appointments">
        <h2>Upcoming Appointments</h2>
        {appointments.length === 0 && !loading && (
          <p>No upcoming appointments.</p>
        )}
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment.id} className="appointment">
              <p><strong>Doctor:</strong> {appointment.doctor}</p>
              <p><strong>Date:</strong> {appointment.date}</p>
              <p><strong>Time:</strong> {appointment.time}</p>
              <p><strong>Reason:</strong> {appointment.reason}</p>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
}

export default PatientDashboard;
