import React from "react";
import Form from "../Components/Form";
import Feed from "../Components/Feed";

const Report = () => {
  return (
    <>
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
    </>
  );
};

export default Report;
