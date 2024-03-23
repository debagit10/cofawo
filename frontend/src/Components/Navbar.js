import React from "react";
import { useCookies } from "react-cookie";
//import cofawo from "../logo.png";
//import FAQ from "./FAQ";
import { useNavigate } from "react-router-dom";
import About from "./About";
import "./Navbar.css";

const Navbar = () => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const navigate = useNavigate();
  const admin = cookies.Token;
  console.log(admin);
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
                <h6 style={{ color: "black" }}> HOME</h6>
              </a>
            </li>
            <li class="nav-item  px-2">
              <a class="nav-link" onClick={() => navigate("/report")}>
                <h6 style={{ color: "black" }}> REPORT</h6>
              </a>
            </li>
            <li class="nav-item  px-2">
              <a class="nav-link" onClick={() => navigate("/about")}>
                <h6 style={{ color: "black" }}> ABOUT</h6>
              </a>
            </li>
            <li class="nav-item  px-2">
              <a class="nav-link" onClick={() => navigate("/faq")}>
                <h6 style={{ color: "black" }}> FAQ</h6>
              </a>
            </li>

            <li class="nav-item  px-2">
              {admin ? (
                <a
                  class="nav-link"
                  onClick={() => {
                    removeCookie("Token");
                    navigate("/");
                  }}
                >
                  <h6 style={{ color: "black" }}> LOGOUT</h6>
                </a>
              ) : (
                <a
                  class="nav-link"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  <h6 style={{ color: "black" }}> LOGIN</h6>
                </a>
              )}
            </li>
            {admin && (
              <li className="nav-item px-2">
                <a class="nav-link" onClick={() => navigate("/analytics")}>
                  <h6 style={{ color: "black" }}> Data analytics</h6>
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
