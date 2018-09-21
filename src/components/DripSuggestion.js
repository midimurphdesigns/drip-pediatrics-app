import React, { Component } from "react";

import DripPicker from "./DripPicker";
import "./DripSuggestion.css";

export default class DripSuggestion extends Component {
  render() {
    return (
      <div id="drips">
        <h4>Input patient's info to figure out which drip to use.</h4>
        <DripPicker />
      </div>
    );
  }
}
