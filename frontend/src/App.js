import React from "react";
import "./App.css";
import Report from "./Pages/Report";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";
import FAQ from "./Components/FAQ";
import Team from "./Components/Team";
import About from "./Components/About";
import Involved from "./Components/Involved";
import Questionnaire from "./Pages/Questionnaire";
import Navbar from "./Components/Navbar";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="sticky-top">
          <Navbar />
        </div>
        <div>
          <Routes>
            <Route path="/" Component={Report} />
            <Route path="/faq" Component={FAQ} />
            <Route path="/team" Component={Team} />
            <Route path="/about" Component={About} />
            <Route path="/participate" Component={Involved} />
            <Route path="/questionnaire" Component={Questionnaire} />
            <Route path="/login" Component={Login} />
          </Routes>
        </div>

        <div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
