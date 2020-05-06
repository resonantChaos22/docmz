//==============================================================
//  IMPORTING LIBRARIES AND COMPONENTS
//==============================================================

import React from "react";
import Waiting  from "./Waiting";
import PreCall  from "./PreCall";
import OpeningScreen from "./OpeningScreen";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "../styles/app.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/doc/:id" exact component={OpeningScreen} />
          <div className="docConfig">
            <Route path="/doc/:id/waitingRoom" component={Waiting} />
          </div>
          <div className="docConfig">
            <Route path="/pre" exact component={PreCall} />
          </div>
        </div>
      </Router>
    );
  }
}

//  EXPORTING APP
export default App;
