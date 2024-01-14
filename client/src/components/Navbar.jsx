import React from "react";
import "../CSS_files/Navbar.css";
import { AuthData } from "../auth/AuthWrapper";
import { Link } from "react-router-dom";

function Navbar() {
  const { user } = AuthData()
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light nav-design fixed-top">
        <Link
          to="/home"
          className="navbar-brand mx-3"
          style={{ color: "white" }}
        >
          MLSA: IIIT - BBSR
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto mx-3 p-1">
            <li className="nav-item ">
              <Link
                to="/application"
                className="nav-link"
                style={{ color: "white" }}
              >
                How to Apply
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/milestones"
                className="nav-link"
                style={{ color: "white" }}
              >
                Milestones
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/chapter"
                className="nav-link"
                style={{ color: "white" }}
              >
                IIIT-BBSR Chapter
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={user.isAuthenticated ? "/register" : "/opening"}
                className="nav-link"
                style={{ color: "white" }}
              >
                Upload
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <br />
      <br />
    </div>
  );
}

export default Navbar;
