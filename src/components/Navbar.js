import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar-wrapper">
        <h1 className="logo">
          <Link to="/">Enteral Formula Wizard</Link>
        </h1>
        <ul className="links">
          <li>
            <Link to="/formulas">Formulas</Link>
          </li>
          <li>
            <Link to="/about">About App</Link>
          </li>
        </ul>
      </div>
    );
  }
}
