import React from "react";
import Form from "../Components/Form";
import Navbar from "../Components/Navbar";
import Feed from "../Components/Feed";
import Footer from "../Footer";
import FAQ from "../FAQ";

const Homepage = () => {
  return (
    <>
      <div className="sticky-top">
        <Navbar />
      </div>
      <div className="container">
        <div class="row g-4">
          <div class="col-md">
            <Form />
          </div>
          <div class="col-md mt-5">
            <Feed />
          </div>
        </div>
      </div>
      <div>
        <FAQ />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
