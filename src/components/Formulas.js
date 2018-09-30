import React, { Component } from "react";


import FormulaWizard from "./FormulaWizard";
import "./Formulas.css";

export default class Formulas extends Component {

  render() {
    return (
      <div id="formulas">
        <h4>Input patient's info to figure out which formula to use.</h4>
        <FormulaWizard />
      </div>
    );
  }
}
