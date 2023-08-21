import React, { useState } from "react";
import axios from "axios";

const Water = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const { id, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [id]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmit = async () => {
    const gender = formData.gender;
    const action = formData.action;
    const domesticUse = formData.domesticUse;
    const hostel = formData.hostel;
    const suggestion = formData.suggestion;
    const disease = formData.disease;

    const config = { headers: { "Content-type": "application/json" } };
    const response = await axios.post(
      "https://cofawo-app.onrender.com/water",
      { gender, action, domesticUse, hostel, suggestion, disease },
      config
    );
    if (response) {
      console.log(response);
    }
  };
  return (
    <div>
      <div class="card mx-3">
        <div class="card-body">
          <h5 class="card-title">Water</h5>
          <p class="card-text">
            This part is to assess the quality of water and the effects on
            students in the University hostels.
          </p>
        </div>
        <img src="..." class="card-img-top" alt="..." />
        <ul class="list-group list-group-flush">
          <li class="list-group-item m-3">
            <div>
              <h6>Gender</h6>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gender"
                  id="gender"
                  value="male"
                  onChange={handleChange}
                />
                <label class="form-check-label" for="gender">
                  Male
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gender"
                  id="gender"
                  onChange={handleChange}
                  value="female"
                />
                <label class="form-check-label" for="gender">
                  Female
                </label>
              </div>
            </div>
          </li>
          <li class="list-group-item">
            <h6>Do you stay in the school hostel?</h6>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="hostel"
                name="hostel"
                value="yes"
                onChange={handleChange}
              />
              <label class="form-check-label" for="hostel">
                Yes
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="hostel"
                name="hostel"
                value="no"
                onChange={handleChange}
              />
              <label class="form-check-label" for="hostel">
                No
              </label>
            </div>
          </li>

          <li class="list-group-item">
            <h6>Do you use the school's water for domestic use? </h6>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="domesticUse"
                name="domestic"
                value="yes"
                onChange={handleChange}
              />
              <label class="form-check-label" for="domesticUse">
                Yes
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="domestic use"
                name="domestic"
                value="no"
                onChange={handleChange}
              />
              <label class="form-check-label" for="domestic use">
                No
              </label>
            </div>
          </li>
          <li class="list-group-item">
            <h6>
              If yes, have you ever had any waterborne disease from the use of
              the water?
            </h6>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="disease"
                name="disease"
                value="yes"
                onChange={handleChange}
              />
              <label class="form-check-label" for="disease">
                Yes
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="disease"
                name="disease"
                value="no"
                onChange={handleChange}
              />
              <label class="form-check-label" for="disease">
                No
              </label>
            </div>
          </li>
          <li class="list-group-item">
            <h6>If yes, what action did you take?</h6>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="action"
                name="action"
                value="stopped using the water"
                onChange={handleChange}
              />
              <label class="form-check-label" for="action">
                Stopped using the water
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="action"
                name="action"
                value="continued using the water with treatment"
                onChange={handleChange}
              />
              <label class="form-check-label" for="action">
                Continued using the water with treatment
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="action"
                name="action"
                value="continued using the water without treatment"
                onChange={handleChange}
              />
              <label class="form-check-label" for="action">
                Continued using the water without treatment
              </label>
            </div>
          </li>

          <li className="list-group-item">
            <label for="suggestion" class="form-label">
              <h6> What do you think can be done to tackle this issue? </h6>
            </label>
            <input
              type="text"
              class="form-control"
              id="suggestion"
              placeholder=""
              onChange={handleChange}
            />
          </li>
        </ul>
        <button className="btn btn-primary mx-5 my-2" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Water;
