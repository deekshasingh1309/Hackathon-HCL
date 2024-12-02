import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Login from "./components/Login";
import { useState } from "react";
import {createBrowserRouter} from "react-router-dom";
import RegistrationForm from "./components/Registration";
import PatientDashboard from "./components/PatientDashboard";
function App() {
  return <Login />
}

export const AppRouter= createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/dashboard",
    element:<PatientDashboard/>
  },
  {
    path:"/register",
    element:<RegistrationForm/>
  },
])

export default App;
