import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./IntroPage.css";

export default class IntroPage extends Component {
  render() {
    return (
      <div id="intro-container">
        <div className="top-header">
          <h1>Enteral Fluid Wizard</h1>
          <h3>A Pediatrics Utility App</h3>
          <h2>Figure out which formula to use in a heart beat</h2>
        </div>
        <div className="overview">
          {/* <div className="overview-heading">
            
          </div> */}
          <div className="overview-icon-section">
          <div className="icon">
            <FontAwesomeIcon className="overview-icon" icon="mobile-alt" />
            <h3>Open Formula Wizard</h3>
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
            <h3>Administor the Correct Formula</h3>
          </div>
        </div>
        </div>
        <div className="arrow-down-container">
          <a className="arrow-down" href="#formulas">
            <FontAwesomeIcon className="arrow-down" icon="angle-down" />
          </a>
        </div>
      </div>
    );
  }
}
