import React, { useState } from "react";

const Form = () => {
  {
    /*const [experienced, setExperienced] = useState([]);
  const [location, setLocation] = useState();
  const [confidential, setConfidential] = useState();
  const [detail, setDetail] = useState();
  const [notify, setNotify] = useState();
const [alert, setAlert] = useState();*/
  }
  //console.log(experienced);
  const [formData, setFormData] = useState({
    experienced: [""],
    isConfidential: true,
    detail: "",
    notify: true,
    alert: true,
    location: "",
  });
  const handleChange = (event) => {
    const { id, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [id]: type === "checkbox" ? checked : value,
      };
    });
  };

  //const handleExperience = () => {};

  const handleSubmit = () => {
    console.log(formData);
  };
  {
    /*const handleExperience = (e) => {
    experienced.push(e.target.value);
    console.log(e.target.value);
  };
  const handleSubmit = () => {
    console.log(experienced, location, confidential, detail, notify, alert);
  };*/
  }
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
                id="experienced"
                autocomplete="off"
                value={(formData.experienced = "nausea")}
                onChange={handleChange}
              />
              <label class="btn btn-outline-primary" for="experienced">
                Nausea
              </label>
            </div>
            <div class="p-2">
              <input
                type="checkbox"
                class="btn-check"
                id="experienced"
                autocomplete="off"
                value={(formData.experienced = "vomiting")}
                onChange={handleChange}
              />
              <label class="btn btn-outline-primary" for="experienced">
                Vomiting
              </label>
            </div>
          </div>

          <div class="d-flex flex-row mb-2 justify-content-center">
            <div class="p-2">
              <input
                type="checkbox"
                class="btn-check"
                id="experienced"
                autocomplete="off"
                value={(formData.experienced = "diarrhea")}
                onChange={handleChange}
              />
              <label class="btn btn-outline-primary" for="experienced">
                Diarrhea
              </label>
            </div>
            <div class="p-2">
              <input
                type="checkbox"
                class="btn-check"
                id="experienced"
                autocomplete="off"
                value={(formData.experienced = "else")}
                onChange={handleChange}
              />
              <label class="btn btn-outline-primary" for="experienced">
                Something else
              </label>
            </div>
          </div>
          <br />
          <label for="location" class="form-label">
            <h6> From:</h6>
          </label>
          <input
            type="email"
            class="form-control"
            id="location"
            placeholder="Where? e.g: Korede's spag"
            onChange={handleChange}
            value={formData.location}
          />
        </div>
        <div className="mt-3">
          <h6>Would you like to keep your report confidential?</h6>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              id="isConfidential"
              value="yes"
              checked={formData.isConfidential === "yes"}
              onChange={handleChange}
            />
            <label class="form-check-label" for="isConfidential">
              Yes
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              id="isConfidential"
              value="no"
              checked={formData.isConfidential === "no"}
              onChange={handleChange}
            />
            <label class="form-check-label" for="isConfidential">
              No
            </label>
          </div>
        </div>

        <div class="my-3">
          <label for="detail" class="form-label">
            <h6>Detail your experience:</h6>
          </label>
          <textarea
            class="form-control"
            id="detail"
            rows="5"
            placeholder="Please provide when the incident took place, specifics of the event, and any other information that may be pertinent. The more comprehensive, the more helpful."
            onChange={handleChange}
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
              checked={formData.notify}
              id="notify"
              onChange={handleChange}
            />
            <label class="form-check-label" for="notify">
              Get notification for my case
            </label>
          </div>

          <div>
            <input
              class="form-check-input"
              type="checkbox"
              checked={formData.alert}
              id="alert"
              onChange={handleChange}
            />
            <label class="form-check-label" for="alert">
              Alert regulators
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
