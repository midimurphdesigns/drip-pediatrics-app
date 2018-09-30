import React, { Component } from 'react'
import axios from "axios";
import './FormulaWizard.css'

export default class FormulaWizard extends Component {
  state = {
    enteralformulas: []
  };
  componentDidMount = () => {
    axios
      .get("https://sheetlabs.com/ENT/EnteralUpdated")
      .then(function(response) {
        
        console.log(response.data);
        this.storeFormulas(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  storeFormulas = data => {
    data.map( formula => {
      console.log(formula);
      return(formula);
    })
  }
  render() {
    return (
      <div id="formula-wizard">
        <h1>Formula Wizard</h1>
      </div>
    )
  }
}
