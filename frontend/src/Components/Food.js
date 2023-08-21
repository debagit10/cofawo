import axios from "axios";
import React, { useState } from "react";

const Food = () => {
  const [formData, setFormData] = useState({});

  const symptoms = [];

  const handleChange = (event) => {
    const { id, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [id]: type === "checkbox" ? checked : value,
      };
    });
  };

  const gender = formData.gender;
  const diagnosis = formData.diagnosis;
  const recommendation = formData.recommendation;
  const treatment = formData.treatment;
  const nausea = formData.nausea;
  const vomiting = formData.vomiting;
  const chills = formData.chills;
  const diarrhea = formData.diarrhea;
  const stomachPain = formData.stomachPain;
  const headache = formData.headache;
  const cramps = formData.cramps;
  const dizziness = formData.dizziness;
  const fever = formData.fever;
  const fatigue = formData.fatigue;
  const indigestion = formData.indigestion;
  const bloating = formData.bloating;
  const sweating = formData.sweating;
  const dehydration = formData.dehydration;

  const handleSubmit = async () => {
    console.log(dehydration);
    if (diarrhea == true) {
      symptoms.push("diarrhea");
    }
    if (nausea == true) {
      symptoms.push("nausea");
    }
    if (chills == true) {
      symptoms.push("chills");
    }
    if (vomiting == true) {
      symptoms.push("vomiting");
    }
    if (stomachPain == true) {
      symptoms.push("stomachPain");
    }
    if (headache == true) {
      symptoms.push("headache");
    }
    if (cramps == true) {
      symptoms.push("cramps");
    }
    if (dizziness == true) {
      symptoms.push("dizziness");
    }
    if (fever == true) {
      symptoms.push("fever");
    }
    if (fatigue == true) {
      symptoms.push("fatigue");
    }
    if (indigestion == true) {
      symptoms.push("indigestion");
    }
    if (bloating == true) {
      symptoms.push("bloating");
    }
    if (sweating == true) {
      symptoms.push("sweating");
    }
    if (dehydration == true) {
      symptoms.push("dehydration");
    }
    const config = { headers: { "Content-type": "application/json" } };
    const response = await axios.post(
      "http://localhost:5000/food",
      { gender, diagnosis, treatment, recommendation, symptoms },
      config
    );
    console.log(response);
  };
  return (
    <div class="card mx-3 my-3">
      <div class="card-body">
        <h5 class="card-title">Food</h5>
        <p class="card-text">
          This section aims to assess the quality of food and the effect on the
          health of students in Universities.
        </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
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
          <h6>Have you ever had food poisoning?</h6>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              id="poisoning"
              name="poisoning"
              onChange={handleChange}
              value="yes"
            />
            <label class="form-check-label" for="poisoning">
              Yes
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              id="poisoning"
              name="poisoning"
              onChange={handleChange}
              value="no"
            />
            <label class="form-check-label" for="poisoning">
              No
            </label>
          </div>
        </li>
        <li class="list-group-item">
          <h6>How did you know it was food poisoning?</h6>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              id="diagnosis"
              value="doctor"
              onChange={handleChange}
              name="diagnosis"
            />
            <label class="form-check-label" for="diagnosis">
              Diagnosis from a doctor
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              id="diagnosis"
              value="friend or loved one"
              onChange={handleChange}
              name="diagnosis"
            />
            <label class="form-check-label" for="diagnosis">
              Diagnosis from a friend or loved one
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              id="diagnosis"
              value="pharmacist"
              onChange={handleChange}
              name="diagnosis"
            />
            <label class="form-check-label" for="diagnosis">
              Diagnosis from a pharmacist
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              id="diagnosis"
              value="self"
              onChange={handleChange}
              name="diagnosis"
            />
            <label class="form-check-label" for="diagnosis">
              Self-diagnosis
            </label>
          </div>
        </li>

        <li class="list-group-item">
          <div>
            <h6>What were your symptoms?</h6>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="diarrhea"
              onChange={handleChange}
            />
            <label class="form-check-label" for="diarrhea">
              Diarrhea
            </label>
          </div>

          <div>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="nausea"
              onChange={handleChange}
            />
            <label class="form-check-label" for="nausea">
              Nausea
            </label>
          </div>
          <div>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="vomiting"
              onChange={handleChange}
            />
            <label class="form-check-label" for="vomiting">
              Vomiting
            </label>
          </div>
          <div>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="chills"
              onChange={handleChange}
            />
            <label class="form-check-label" for="chills">
              Chills
            </label>
          </div>
          <div>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="stomachPain"
              onChange={handleChange}
            />
            <label class="form-check-label" for="stomach pain">
              Stomach pain
            </label>
          </div>
          <div>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="headache"
              onChange={handleChange}
            />
            <label class="form-check-label" for="headache">
              Headache
            </label>
          </div>
          <div>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="cramps"
              onChange={handleChange}
            />
            <label class="form-check-label" for="cramps">
              Cramps
            </label>
          </div>
          <div>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="dizziness"
              onChange={handleChange}
            />
            <label class="form-check-label" for="dizziness">
              Dizziness
            </label>
          </div>
          <div>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="sweating"
              onChange={handleChange}
            />
            <label class="form-check-label" for="sweating">
              Sweating
            </label>
          </div>
          <div>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="dehydration"
              onChange={handleChange}
            />
            <label class="form-check-label" for="dehydration">
              Dehydration
            </label>
          </div>
          <div>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="fatigue"
              onChange={handleChange}
            />
            <label class="form-check-label" for="fatigue">
              Fatigue
            </label>
          </div>
          <div>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="fever"
              onChange={handleChange}
            />
            <label class="form-check-label" for="fever">
              Fever
            </label>
          </div>
          <div>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="bloating"
              onChange={handleChange}
            />
            <label class="form-check-label" for="bloating">
              Bloating
            </label>
          </div>
          <div>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="indigestion"
              onChange={handleChange}
            />
            <label class="form-check-label" for="indisgestion">
              Indigestion
            </label>
          </div>
        </li>
        <li class="list-group-item">
          <h6>How did you treat yourslef?</h6>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              id="treatment"
              value="none"
              name="treatment"
              onChange={handleChange}
            />
            <label class="form-check-label" for="treatment">
              I did not get treatment
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              id="treatment"
              value="pharmacy"
              name="treatment"
              onChange={handleChange}
            />
            <label class="form-check-label" for="treatment">
              Pharmacy
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              id="treatment"
              value="medical center"
              name="treatment"
              onChange={handleChange}
            />
            <label class="form-check-label" for="treatment">
              Medical center
            </label>
          </div>
        </li>

        <li class="list-group-item">
          <label for="recommendation" class="form-label">
            <h6>
              What recommendation can you give to resolve/prevent the issue of
              food poisoning?
            </h6>
          </label>
          <input
            type="text"
            class="form-control"
            id="recommendation"
            onChange={handleChange}
          />
        </li>
      </ul>
      <button className="btn btn-primary mx-5 my-2" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Food;
