import React, { useState, useEffect } from "react";
import Form from "../Components/Form";
import Feed from "../Components/Feed";
import axios from "axios";

const Report = () => {
  const [reports, setReports] = useState([]);
  const config = { headers: { "Content-type": "application/json" } };
  const getReports = async () => {
    try {
      const response = await axios.get(
        "https://cofawo-app.onrender.com/report",
        config
      );
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
