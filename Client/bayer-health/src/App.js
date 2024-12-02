import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Login from "./components/Login";
import { useState } from "react";

function App() {
  const [isValidUser, setValidUser] = useState(false);
  return isValidUser ? (
    <div className="App">
      <Header />
      <Body />
    </div>
  ) : (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
