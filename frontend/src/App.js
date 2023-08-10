import React from "react";
import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";

const App = () => {
  return (
    <div>
      <Homepage />
      <BrowserRouter>
        <Routes>
          <Route path="/login" Component={Login} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
