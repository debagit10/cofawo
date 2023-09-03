import React, { useState } from "react";
import axios from "axios";

const Comment = ({ item }) => {
  const [comment, setComment] = useState();
  const [viewComment, setViewComment] = useState([]);
  const [seeComment, setSeeComment] = useState(true);

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

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const config = { headers: { "Content-type": "application/json" } };

  const seeComments = async () => {
    const report_id = item.id;

    console.log(report_id);

    const response = await axios.post(
      "http://localhost:5000/viewComment",
      { report_id },
      config
    );
    if (response) {
      const comments = response.data;
      setViewComment(comments);
      console.log(viewComment);
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

        {viewComment.map((item) => (
          <ul>
            <li style={{ listStyle: "none" }}>{item.comment}</li>
          </ul>
        ))}
        <button className="btn" onClick={seeComments}>
          View Comments
        </button>
      </div>
    </div>
  );
};

export default Comment;
