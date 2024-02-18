import React, { useState } from "react";
import axios from "axios";

const Comment = ({ item }) => {
  const [comment, setComment] = useState();
  const [viewComment, setViewComment] = useState([]);
  const [seeComment, setSeeComment] = useState(true);

  const submit = async () => {
    const report_id = item.id;
    const response = await axios.post(
      "https://cofawo-api.onrender.com/api/comment/add",
      { report_id, comment },
      config
    );
    if (response) {
      console.log(response);
    }
  };

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const config = { headers: { "Content-type": "application/json" } };

  const getComments = async () => {
    const report_id = item.id;

    console.log(report_id);

    const response = await axios.get(
      "https://cofawo-api.onrender.com/api/comment/view",
      { params: report_id }
    );
    if (response) {
      const comments = response.data;
      setViewComment(comments);
    }
  };

  return (
    <div>
      <div className="container p-3">
        <div>
          <input placeholder="Add comment" onChange={handleChange} />
          <button onClick={submit} className="btn">
            Comment
          </button>
        </div>

        <div>
          {seeComment &&
            viewComment.map((item) => (
              <ul>
                <li style={{ listStyle: "none" }}>{item.comment}</li>
              </ul>
            ))}
        </div>
        <button
          className="btn"
          onClick={() => {
            getComments();
            setSeeComment(true);
          }}
        >
          View Comments
        </button>
      </div>
    </div>
  );
};

export default Comment;
