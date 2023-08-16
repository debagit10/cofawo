import React from "react";

const Action = () => {
  return (
    <div className="bg-secondary-subtle p-3">
      <div className="container">
        <h4 style={{ textDecoration: "underline" }} className="text-center">
          Help us make university campuses safer for everyone!
        </h4>
        <br />
        <ul>
          <li>
            <h6>Report food poisoning cases:</h6>
            If you think you have food poisoning, please report it to us so that
            we can help others stay safe
          </li>
          <li>
            <h6>Share our resources:</h6>
            Share our information and resources on food safety with your
            friends, family, and fellow students.
          </li>
          <li>
            <h6>Get Involved:</h6>
            Volunteer your time to help us with our work.
          </li>
          <li>
            <h6>Donate to our cause:</h6>
            Your donation will help us continue our work to reduce the incidence
            of food poisoning on university campuses.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Action;
