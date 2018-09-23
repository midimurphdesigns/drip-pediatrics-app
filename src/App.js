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
import { Route, withRouter } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import IntroPage from "./components/IntroPage";
import Formulas from "./components/Formulas";
import AboutApp from "./components/AboutApp";
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
        <Navbar />
        <main>
          <Route exact path="/" component={IntroPage} />
          <Route exact path="/formulas" component={Formulas} />
          <Route exact path="/about" component={AboutApp} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
