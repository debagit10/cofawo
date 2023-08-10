import React from "react";
import Form from "../Components/Form";
import Navbar from "../Components/Navbar";
import Feed from "../Components/Feed";
import Footer from "../Footer";
import FAQ from "../Components/FAQ";
import About from "../Components/About";
import Team from "../Components/Team";
import Involved from "../Components/Involved";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Questionnaire from "./Questionnaire";
import Login from "./Login";

const Homepage = () => {
  return (
    <>
      <BrowserRouter>
        <div className="sticky-top">
          <Navbar />
        </div>
        <div className="container">
          <div class="row g-4">
            <div class="col-md">
              <Form />
            </div>
            <div class="col-md mt-5">
              <Routes>
                <Route path="/" Component={Feed} />
                <Route path="/faq" Component={FAQ} />
                <Route path="/team" Component={Team} />
                <Route path="/about" Component={About} />
                <Route path="/participate" Component={Involved} />
                <Route path="/questionnaire" Component={Questionnaire} />
                <Route path="/login" Component={Login} />
              </Routes>
            </div>
          </div>
        </div>

        <div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default Homepage;
