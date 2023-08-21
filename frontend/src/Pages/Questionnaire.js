import React, { useState } from "react";
import Food from "../Components/Food";
import Water from "../Components/Water";

const Questionnaire = () => {
  return (
    <div className="container">
      <Food />
      <Water />
    </div>
  );
};

export default Questionnaire;
