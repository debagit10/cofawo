import React from "react";
import Action from "../Components/Action";
import Goals from "../Components/Goals";
import Mission from "../Components/Mission";
import Safety from "../Components/Safety";
import Slider from "../Components/Slider";

const Home = () => {
  return (
    <div>
      <div>
        <Slider />
      </div>
      <div>
        <Mission />
      </div>
      <div>
        <Goals />
      </div>
      <div>
        <Action />
      </div>
      <div>
        <Safety />
      </div>
    </div>
  );
};

export default Home;
