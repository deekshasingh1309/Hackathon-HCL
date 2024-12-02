import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Login from "./components/Login";
import { useState } from "react";
import {createBrowserRouter} from "react-router-dom";
import RegistrationForm from "./components/Registration";
function App() {
  const [isValidUser, setValidUser] = useState(false);
  return isValidUser ? (
    <div className="App">
      <RegistrationForm/>
      <Header />
      <Body />
    </div>
  ) : (
    <div className="App">
      <Login />
    </div>
  );
}

export const AppRouter= createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  // {
  //   path:"/login",
  //   element:<Login/>
  // },
  {
    path:"/registration",
    element:<RegistrationForm/>
  },
])

export default App;
