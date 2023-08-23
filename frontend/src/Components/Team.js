import React from "react";
import "./Team.css";
import team from "../team.jpg";

const Team = () => {
  return (
    <div className="team">
      <div className="container p-5" style={{ height: "100vh" }}>
        <div class="card  p-3 text-center">
          <img
            src={team}
            className="img 
               img-fluid"
            alt="cofawo's team picture"
          />
          <div class="card-body">
            <h5 class="card-title">Our Team</h5>
            <p class="card-text">
              CoFaWo is a team of passionate individuals who are committed to
              making a difference in the fight against food poisoning. We are a
              diverse team with a wide range of skills and experience. We are
              united by our common goal of making our campuses safer for
              everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
