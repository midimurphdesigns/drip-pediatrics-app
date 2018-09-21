import React, { Component } from "react";

import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-wrapper">
        <h2 className="footer-logo">
          <a>Drip</a>
        </h2>
        <ul className="footer-links">
          <li>
            <a href="https://kevinmurphywebdev.com/">Kevin Murphy</a>
          </li>
          <li>
            <a href="https://web-developer.engineer/" target="_blank">Rahul Vaidya</a>
          </li>
        </ul>
      </div>
    );
  }
}
