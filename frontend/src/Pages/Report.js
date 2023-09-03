import React, { useState, useEffect } from "react";
import Form from "../Components/Form";
import Feed from "../Components/Feed";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Report = () => {
  const navigate = useNavigate();
  const [reports, setReports] = useState([]);
  const config = { headers: { "Content-type": "application/json" } };
  const getReports = async () => {
    try {
      const response = await axios.get("http://localhost:5000/report", config);
      const report = response.data;

      setReports(report);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getReports();
  });

  return (
    <>
      <div className="container">
        <div class="row g-4">
          <div class="col-md">
            <Form />
          </div>
          <div class="col-md mt-5">
            <button
              onClick={() => navigate("/questionnaire")}
              className="btn btn-primary w-100"
            >
              Please Take Our General Questionnaire
            </button>

            <h4 className="text-center"> Reports Feed</h4>
            {reports.map((item) => (
              <Feed key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Report;
