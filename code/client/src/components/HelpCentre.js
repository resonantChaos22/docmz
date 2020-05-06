//==============================================================
//  IMPORTING LIBRARIES AND COMPONENTS
//==============================================================

import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "../styles/app.css";

class HelpCentre extends React.Component {
  render() {
    return (
      <div>
        <div className="ui container">
          <div className="ui segment">
            <Link to="/">
              <div className="ui primary button">Back</div>
            </Link>
            <h1 className="ui huge header center aligned"><b>Help Centre</b></h1>


            <div className="ui segment">
              <h3 className="ui big header center alignment">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                eget nisi sit amet metus vehicula laoreet. Phasellus
                sollicitudin cursus augue ac auctor.
              </h3>
            </div>

            <div className="ui segment">
              <h3 className="ui big header center alignment">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                eget nisi sit amet metus vehicula laoreet. Phasellus
                sollicitudin cursus augue ac auctor.
              </h3>
            </div>

            <div className="ui segment">
              <h3 className="ui big header center alignment">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                eget nisi sit amet metus vehicula laoreet. Phasellus
                sollicitudin cursus augue ac auctor.
              </h3>
            </div>

            <div className="ui segment">
              <h3 className="ui big header center alignment">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                eget nisi sit amet metus vehicula laoreet. Phasellus
                sollicitudin cursus augue ac auctor.
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//  EXPORTING APP
export default HelpCentre;
