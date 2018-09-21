import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./IntroSection.css";

export default class IntroSection extends Component {
  render() {
    return (
      <div id="intro-container">
        <div>
          <h1>Welcome to Drip!</h1>
          <h2>Figure out which drip to use in a heart beat</h2>
        </div>
        <div className="arrow-down-container">
          <a className="arrow-down" href="#drips">
            <FontAwesomeIcon className="arrow-down" icon="angle-down" />
          </a>
        </div>
      </div>
    );
  }
}
