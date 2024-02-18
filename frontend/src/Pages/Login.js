import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [adminID, setadminID] = useState();
  const [password, setPassword] = useState();
  const [cookies, setCookie, removeCookies] = useCookies();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!adminID || !password) {
      console.log("fill all fields");
      return;
    }

    const config = { headers: { "Content-type": "application/json" } };

    const response = await axios.post(
      "https://cofawo-api.onrender.com/api/admin/login",
      {
        adminID,
        password,
      },
      config
    );
    console.log(response);
  };

  return (
    <div style={{ background: "#00D9FF" }}>
      <div className="d-flex justify-content-center pt-5 align-items-center">
        <form style={{ height: "100vh", width: "50vw" }}>
          <div class="mb-3">
            <h5 className="text-center">Login as Admin</h5>
            <label for="admin's ID" class="form-label">
              Admin's ID
            </label>
            <input
              type="email"
              class="form-control"
              id="admin's ID"
              aria-describedby="emailHelp"
              onChange={(e) => setadminID(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" class="btn btn-primary" onClick={handleSubmit}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
