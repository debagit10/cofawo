import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Comment from "./Comment";

const Feed = ({ item }) => {
  const navigate = useNavigate();
  const [comment, setComment] = useState();

  const config = { headers: { "Content-type": "application/json" } };

  return (
    <div className="container">
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
        <Comment item={item} key={item.id} />
      </div>
    </div>
  );
};

export default Feed;
