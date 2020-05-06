//==============================================================
//  IMPORTING LIBRARIES AND COMPONENTS
//==============================================================

import React from "react";
import Layout from "./Layout";
import DoctorConfig from "./DoctorConfig";
import Customize from "./Customize";
import Settings from "./Settings";
import Meeting from "./Meeting";
import HelpCentre from "./HelpCentre";
import Add from "./Add";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "../styles/app.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Layout />

            <div className="docConfig">
              <Route path="/" exact component={DoctorConfig} />
            </div>

            <div className="docConfig">
              <Route path="/custom"  component={Customize} />
            </div>

            <div className="docConfig">
              <Route path="/settings"  component={Settings} />
            </div>

            <div className="docConfig">
              <Route path="/meetings"  component={Meeting} />
            </div>

            <div className="docConfig">
              <Route path="/help"  component={HelpCentre} />
            </div>

            <div className="docConfig">
              <Route path="/add/:id"  component={Add} />
            </div>



        </div>
      </Router>
    );
  }
}

//  EXPORTING APP
export default App;
