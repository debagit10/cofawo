import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Feed = ({ item }) => {
  const navigate = useNavigate();
  const [comment, setComment] = useState();

  const config = { headers: { "Content-type": "application/json" } };

  const submit = async () => {
    const report_id = item.id;
    const response = await axios.post(
      "http://localhost:5000/comment",
      { report_id, comment },
      config
    );
    if (response) {
      console.log(response);
    }
  };

  const seeComments = async () => {
    const report_id = item.id;
    const response = await axios.post(
      "http://localhost:5000/viewComment",
      { report_id },
      config
    );
    if (response) {
      const comments = response.data;
      console.log(comments);
    }
  };

  return (
    <div className="container">
      <button
        onClick={() => navigate("/questionnaire")}
        className="btn btn-primary w-100"
      >
        Please Take Our General Questionnaire
      </button>

      <h4 className="text-center"> Reports Feed</h4>

      <div class="card mb-3" key={item.id}>
        <div class="card-body">
          <h5 class="card-title">#{item.location}</h5>
          <p class="card-text">{item.detail}</p>
        </div>
        <img src="..." class="card-img-top" alt="..." />
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <b>Location:</b> {item.location}
          </li>
        </ul>
        <input
          placeholder="Add comment here"
          className="m-2"
          onChange={(e) => setComment(e.target.value)}
        />
        <span>
          <button onClick={submit} className="btn btn-primary">
            Comment
          </button>
        </span>
        <a onClick={seeComments}>See Comments</a>
      </div>
    </div>
  );
};

export default Feed;
