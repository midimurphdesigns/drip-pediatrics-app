import React, { Component } from "react";

import DripPicker from "./DripPicker";
import "./FormulaSection.css";

export default class FormulaSection extends Component {
  render() {
    return (
      <div id="drips">
        <h4>Input patient's info to figure out which drip to use.</h4>
        <DripPicker />
      </div>
    );
  }
}
