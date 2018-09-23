import React, { Component } from "react";

import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar-wrapper">
        <h1 className="logo">
          <a>Enteral Formula Wizard</a>
        </h1>
        <ul className="links">
          <li>
            <a>Kevin Murphy</a>
          </li>
          <li>
            <a>Rahul Vaidya</a>
          </li>
        </ul>
      </div>
    );
  }
}
