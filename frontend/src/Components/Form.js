import React, { useState } from "react";

const Form = () => {
  const [experienced, setExperienced] = useState([]);
  const [location, setLocation] = useState();
  const [confidential, setConfidential] = useState();
  const [detail, setDetail] = useState();
  const [notify, setNotify] = useState();
  const [alert, setAlert] = useState();
  //console.log(experienced);
  const handleExperience = (e) => {
    experienced.push(e.target.value);
    console.log(e.target.value);
  };
  const handleSubmit = () => {
    console.log(experienced, location, confidential, detail, notify, alert);
  };
  return (
    <div className="container card mt-4">
      <div className="card-body">
        <h5 className="card-title text-center">REPORT IT NOW</h5>

        <div class="mb-3">
          <h6>I experienced:</h6>
          <div class="d-flex flex-row mb-2 justify-content-center">
            <div class="p-2">
              <input
                type="checkbox"
                class="btn-check"
                id="nausea"
                autocomplete="off"
                value="nausea"
                onClick={handleExperience}
              />
              <label class="btn btn-outline-primary" for="nausea">
                Nausea
              </label>
            </div>
            <div class="p-2">
              <input
                type="checkbox"
                class="btn-check"
                id="vomiting"
                autocomplete="off"
                value="vomiting"
                onClick={handleExperience}
              />
              <label class="btn btn-outline-primary" for="vomiting">
                Vomiting
              </label>
            </div>
          </div>

          <div class="d-flex flex-row mb-2 justify-content-center">
            <div class="p-2">
              <input
                type="checkbox"
                class="btn-check"
                id="diarrhea"
                autocomplete="off"
                value="diarrhea"
                onClick={handleExperience}
              />
              <label class="btn btn-outline-primary" for="diarrhea">
                Diarrhea
              </label>
            </div>
            <div class="p-2">
              <input
                type="checkbox"
                class="btn-check"
                id="else"
                autocomplete="off"
                value="else"
                onClick={handleExperience}
              />
              <label class="btn btn-outline-primary" for="else">
                Something else
              </label>
            </div>
          </div>
          <br />
          <label for="exampleFormControlInput1" class="form-label">
            <h6> From:</h6>
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Where? e.g: Korede's spag"
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="mt-3">
          <h6>Would you like to keep your report confidential?</h6>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              value="yes"
              onClick={(e) => setConfidential(e.target.value)}
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Yes
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              value="no"
              onClick={(e) => setConfidential(e.target.value)}
            />
            <label class="form-check-label" for="flexRadioDefault2">
              No
            </label>
          </div>
        </div>

        <div class="my-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            <h6>Detail your experience:</h6>
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            placeholder="Please provide when the incident took place, specifics of the event, and any other information that may be pertinent. The more comprehensive, the more helpful."
            onChange={(e) => setDetail(e.target.value)}
          ></textarea>
        </div>
        <div>
          <button type="button" class="btn btn-primary" onClick={handleSubmit}>
            REPORT IT NOW
          </button>
        </div>
        <div class="form-check mt-3">
          <div>
            <input
              class="form-check-input"
              type="checkbox"
              value="yes"
              id="notification"
              onClick={(e) => setNotify(e.target.value)}
            />
            <label class="form-check-label" for="notification">
              Get notification for my case
            </label>
          </div>

          <div>
            <input
              class="form-check-input"
              type="checkbox"
              value="yes"
              id="regulators"
              onClick={(e) => setAlert(e.target.value)}
            />
            <label class="form-check-label" for="regulators">
              Alert regulators
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
