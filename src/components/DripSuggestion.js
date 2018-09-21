import React, { Component } from "react";

import DripPicker from "./DripPicker";
import "./DripSuggestion.css";

export default class DripSuggestion extends Component {
  render() {
    return (
      <div id="drips">
        <h3>Drip Suggestions</h3>
        <h4>Follow these directions to figure out which drip to use.</h4>
        <DripPicker />
      </div>
    );
  }
}
