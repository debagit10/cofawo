import React from "react";
//import cofawo from "../logo.png";
//import FAQ from "./FAQ";
import { useNavigate } from "react-router-dom";
import About from "./About";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav class="navbar navbar-expand-lg bg-secondary-subtle bg-gradient">
      <div class="container">
        <a class="navbar-brand" onClick={() => navigate("/")}>
          <h4>
            <span className="logo-one">CoFa</span>
            <span className="logo-two">Wo</span>
          </h4>
          <h6>
            COMMUNITY FOOD AND
            <br />
            WATER OBSERVATORY
          </h6>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon "></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item px-2">
              <a
                class="nav-link"
                aria-current="page"
                onClick={() => navigate("/")}
              >
                <h6> Home</h6>
              </a>
            </li>
            <li class="nav-item  px-2">
              <a class="nav-link" onClick={() => navigate("/about")}>
                <h6> About</h6>
              </a>
            </li>
            <li class="nav-item  px-2">
              <a class="nav-link" onClick={() => navigate("/faq")}>
                <h6> FAQ</h6>
              </a>
            </li>
            <li class="nav-item  px-2">
              <a class="nav-link" onClick={() => navigate("/team")}>
                <h6> Team</h6>
              </a>
            </li>
            <li class="nav-item  px-2">
              <a class="nav-link" onClick={() => navigate("/report")}>
                <h6> Report</h6>
              </a>
            </li>
            <li class="nav-item  px-2">
              <a class="nav-link" onClick={() => navigate("/login")}>
                <h6> Login</h6>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
