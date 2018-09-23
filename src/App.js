import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStroopwafel,
  faAngleDown,
  faTint,
  faUser,
  faFileMedicalAlt,
  faMobileAlt,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";

import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
import IntroSection from "./components/IntroSection";
import FormulaSection from "./components/FormulaSection";
import "./App.css";

class App extends Component {
  render() {
    library.add(
      faStroopwafel,
      faAngleDown,
      faTint,
      faUser,
      faFileMedicalAlt,
      faMobileAlt,
      faArrowRight
    );
    return (
      <div className="App">
        {/* <Navbar /> */}
        <IntroSection />
        <FormulaSection />
        <Footer />
      </div>
    );
  }
}

export default App;
