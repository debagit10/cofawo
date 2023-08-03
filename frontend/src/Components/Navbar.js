import React from "react";
import cofawo from "../cofawo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="header">
      <div className="navbar">
        <img src={cofawo} alt="cofawo logo" className="logo" />
        <p>
          COMMUNITY FOOD AND
          <br /> WATER OBSERVATORY
        </p>

        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
          </ul>
          <i className="bi bi-list" />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
