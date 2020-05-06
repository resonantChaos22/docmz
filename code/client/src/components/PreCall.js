//==============================================================
//  IMPORTING LIBRARIES AND COMPONENTS
//==============================================================

import React from "react";
import Layout from "./Layout";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "../styles/app.css";

class PreCall extends React.Component {
  render() {
    return (
      <div>
        <Layout />
        <div className="ui container">
          <div className="ui segment">
              <br />
            <h1 className="ui huge header center aligned">
              Pre Call Test
            </h1>
            <br />
            <div className="ui center aligned segment">
              <br />
              <div
                class="ui link cards "
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div class="card">
                  <div class="image">
                      <i className="fas fa-laptop-code dem"></i>
                  </div>
                  <div className="content">
                    <div className="header">Software</div>
                  </div>
                </div>

                <div class="card">
                  <div class="image">
                      <i className="fas fa-server dem"></i>
                  </div>
                  <div className="content">
                    <div className="header">Server</div>
                  </div>
                </div>

                <div class="card">
                  <div class="image">
                      <i className="fas fa-wifi dem"></i>
                  </div>
                  <div className="content">
                    <div className="header">Internet Connectivity</div>
                  </div>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//  EXPORTING APP
export default PreCall;
