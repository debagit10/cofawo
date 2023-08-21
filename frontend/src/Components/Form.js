import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [error, setError] = useState();
  const [formData, setFormData] = useState({
    nausea: false,
    vomiting: false,
    diarrhea: false,
    other: false,
    isConfidential: false,
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

  const handleSubmit = async () => {
    const nausea = formData.nausea;
    const vomiting = formData.vomiting;
    const diarrhea = formData.diarrhea;
    const other = formData.other;
    const isConfidential = formData.isConfidential;
    const detail = formData.detail;
    const notify = formData.notify;
    const alert = formData.alert;
    const location = formData.location;

    const symptoms = [];
    if (diarrhea == true) {
      symptoms.push("diarrhea");
    }
    if (nausea == true) {
      symptoms.push("nausea");
    }
    if (vomiting == true) {
      symptoms.push("vomiting");
    }

    const config = { headers: { "Content-type": "application/json" } };

    try {
      const report = await axios.post(
        "https://cofawo-app.onrender.com/report",
        {
          nausea,
          vomiting,
          diarrhea,
          other,
          isConfidential,
          detail,
          notify,
          alert,
          location,
          symptoms,
        },
        config
      );
      const data = report.data;
      if (data) {
        //window.location.reload();
      }
    } catch (error) {
      setError("Could not upload report");
      console.error(error);
    }

    //console.log(symtomps);
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
              />
              <label class="btn btn-outline-primary" for="diarrhea">
                Diarrhea
              </label>
            </div>
            <div class="p-2">
              <input
                type="checkbox"
                class="btn-check"
                id="other"
                autocomplete="off"
                onChange={handleChange}
              />
              <label class="btn btn-outline-primary" for="other">
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
          {error}
        </div>
      </div>
    </div>
  );
};

export default Form;
