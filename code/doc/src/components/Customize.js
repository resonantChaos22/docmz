//==============================================================
//  IMPORTING LIBRARIES AND COMPONENTS
//==============================================================

import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "../styles/app.css";

class Customize extends React.Component {
  render() {
    return (
      <div>
        <div className="ui container">
          <div className="ui segment">
            <Link to="/">
              <div className="ui primary button">Save</div>
            </Link>
            <Link to="/">
              <div className="ui primary button">Exit Without Saving?</div>
            </Link>
            <h1 className="ui huge header center aligned">
              Customize Waiting Room
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
                    <Link to="/add/Text">
                      <i className="fas fa-align-center dem"></i>
                    </Link>
                  </div>
                  <div className="content">
                    <div className="header">Text</div>
                  </div>
                </div>

                <div class="card">
                  <div class="image">
                    <Link to="/add/Image">
                      <i className="far fa-image dem"></i>
                    </Link>
                  </div>
                  <div className="content">
                    <div className="header">Image</div>
                  </div>
                </div>

                <div class="card">
                  <div class="image">
                    <Link to="/add/Video">
                      <i className="fas fa-video dem"></i>
                    </Link>
                  </div>
                  <div className="content">
                    <div className="header">Video</div>
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
export default Customize;
