import React from "react";

const sideBar = () => {
  return (
    <div class="sidebar">
      <h2>Bayer Health</h2>
      <ul>
        <li>
          <a href="#" style="font-weight: bold;">
            Dashboard
          </a>
        </li>
        <li>
          <a href="#">Patient List</a>
        </li>
        <li>
          <a href="#">Appointments</a>
        </li>
        <li>
          <a href="#">Messages</a>
        </li>
        <li>
          <a href="#">Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default sideBar;
