import React from "react";
//import cofawo from "../logo.png";
//import FAQ from "./FAQ";
import { useNavigate } from "react-router-dom";
import About from "./About";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
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
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                onClick={() => navigate("/")}
              >
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" onClick={() => navigate("/about")}>
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" onClick={() => navigate("/faq")}>
                FAQ
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" onClick={() => navigate("/team")}>
                Our Team
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" onClick={() => navigate("/participate")}>
                Participate
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
