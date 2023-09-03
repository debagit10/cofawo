import React from "react";
import team from "../team.jpg";

const About = () => {
  return (
    <div style={{ background: "#00D9FF" }}>
      <div className="container p-3">
        <div class="card  p-3">
          <div class="card-body">
            <h5 class="card-title text-center">About Us</h5>
            <p class="card-text">
              CoFaWo is a non-profit organization dedicated to reducing the
              incidence of food poisoning on university campuses in Nigeria. We
              believe that everyone has the right to safe food, and we are
              committed to working with students, staff, and the university
              community to make our campuses safer.
              <br /> We achieve our mission through a variety of activities,
              including: <br />• Collecting data on food poisoning: We collect
              data on food poisoning on university campuses through our website.
              This data helps us to understand the scope of the problem and to
              identify areas where we can make a difference. <br />• Raising
              awareness of food safety: We raise awareness of food safety
              through our website, our social media channels, and our
              educational materials. We believe that everyone has a role to play
              in preventing food poisoning, and we want to equip people with the
              knowledge they need to keep themselves and their loved ones safe.
              <br /> • Advocating for food safety: We advocate for food safety
              with the university administration, food vendors, and government
              agencies. We believe that everyone has a responsibility to ensure
              that safe food is available to everyone, and we will continue to
              work until our campuses are free from food poisoning.
            </p>
          </div>
          <hr />
          <h5 class="card-title text-center pt-3">Meet the Team</h5>
          <div className="row align-items-center justify-content-between p-3">
            <div style={{ width: "300px" }} className="col-md">
              <img
                src={team}
                className="img 
               img-fluid "
                alt="cofawo's team picture"
              />
            </div>
            <div className="col-md">
              <p class="card-text p-3">
                CoFaWo is a team of passionate individuals who are committed to
                making a difference in the fight against food poisoning. We are
                a diverse team with a wide range of skills and experience. We
                are united by our common goal of making our campuses safer for
                everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
