import React, { Component } from "react";
import axios from "axios";

import FormulaWizard from "./FormulaWizard";
import "./Formulas.css";

export default class Formulas extends Component {
  state = {
    enteralformulas: []
  };
  componentDidMount() {
    axios
      .get("https://sheetlabs.com/ENT/EnteralUpdated")
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div id="formulas">
        <h4>Input patient's info to figure out which formula to use.</h4>
        <FormulaWizard />
      </div>
    );
  }
}
