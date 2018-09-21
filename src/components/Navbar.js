import React, { Component } from "react";

import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar-wrapper">
        <h1 className="logo">
          <a>Drip</a>
        </h1>
        <ul className="links">
          <li>
            <a>Resources</a>
          </li>
          <li>
            <a>Need Help Now</a>
          </li>
        </ul>
      </div>
    );
  }
}
