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
import Navbar from "./components/Navbar";
import IntroSection from "./components/IntroSection";
import DripSuggestion from "./components/DripSuggestion";
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
        <DripSuggestion />
        <Footer />
      </div>
    );
  }
}

export default App;
