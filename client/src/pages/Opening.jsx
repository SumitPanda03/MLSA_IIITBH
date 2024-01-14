import React, { useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { AuthData } from "../auth/AuthWrapper.jsx";
import "../CSS_files/backend.css";
import Navbar from "../components/Navbar.jsx";

const Opening = () => {
  const navigate = useNavigate();
  const { login } = AuthData();
  const [formData, setFormData] = useReducer(
    (formData, newItem) => {
      return { ...formData, ...newItem };
    },
    { userName: "", password: "" }
  );
  const [errorMessage, setErrorMessage] = useState(null);

  const doLogin = async () => {
    try {
      await login(formData.userName, formData.password);
      navigate("/register");
    } catch (error) {
      setErrorMessage(error);
    }
  };
  return (
    <>
      {/* <nav class="navbar sticky-top navbar-expand-lg navbar-dark transparent-navbar">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            WELCOME TO ADMIN PAGE
          </a>
        </div>
      </nav> */}
      <Navbar />
      <form className="opening">
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          required
          value={formData.userName}
          onChange={(e) => setFormData({ userName: e.target.value })}
        />
        <input
          type="password"
          placeholder="Enter Password"
          required
          name="password"
          value={formData.password}
          onChange={(e) => setFormData({ password: e.target.value })}
        />
        <button onClick={doLogin} type="button">
          ENTER
        </button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </>
  );
};

export default Opening;
