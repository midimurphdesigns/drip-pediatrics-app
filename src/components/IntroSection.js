import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./IntroSection.css";

export default class IntroSection extends Component {
  render() {
    return (
      <div id="intro-container">
        <div className="top-header">
          <h1>Welcome to Drip!</h1>
          <h3>A Pediatrics Utility App</h3>
          <h2>Figure out which drip to use in a heart beat</h2>
        </div>
        <div className="overview">
          {/* <div className="overview-heading">
            
          </div> */}
          <div className="overview-icon-section">
          <div className="icon">
            <FontAwesomeIcon className="overview-icon" icon="mobile-alt" />
            <h3>Open Drip Picker App</h3>
          </div>
          <FontAwesomeIcon className="arrow-right" icon="arrow-right" />
          <div className="icon">
            <FontAwesomeIcon
              className="overview-icon"
              icon="file-medical-alt"
            />
            <h3>Input Patient Information</h3>
          </div>
          <FontAwesomeIcon className="arrow-right" icon="arrow-right" />
          <div className="icon">
            <FontAwesomeIcon className="overview-icon" icon="tint" />
            <h3>Administor the Correct Drip</h3>
          </div>
        </div>
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
