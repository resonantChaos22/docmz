//==============================================================
//  IMPORTING LIBRARIES AND COMPONENTS
//==============================================================

import React from "react";
import "../styles/config.css";
import faker from "faker";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

class DoctorConfig extends React.Component {
  render() {
    return (
      <div>
        {/* ===================================================== */}
        {/* Doctor Card */}
        {/* ===================================================== */}

        <div className="ui container">
          <div
            className="ui doc segment"
            style={{
              padding: "5%",
              border: "lightgrey 1px solid",
              borderRadius: "10px",
            }}
          >
            <div
              className="detail"
              style={{ marginRight: "4%", marginTop: "2%" }}
            >
              <h1 className="ui header">Welcome, Dr. Stewart</h1>
              <h3>To share meeting, share the following code</h3>
              <br></br>
              <form className="ui form">
                <div className="ui addr field">
                  <input type="text" value="www.docmz.com/stewart101" />
                  <button class="ui primary button">Copy</button>
                  <button class="ui primary button">Share</button>
                </div>
              </form>
            </div>
            <div className="ui medium left aligned image">
              <img
                src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="doc"
              />
            </div>
          </div>
        </div>


        {/* ===================================================== */}
        {/* Doctor Options */}
        {/* ===================================================== */}

        <div className="options ui container">
          <div className="ui link cards">

            {/* Customize */}

            <div className="card">
              <div className="image">
                <Link to="/custom">
                  <i class="fas fa-users ico"></i>
                </Link>
              </div>

              <div className="content">
                <Link to="/custom">
                  <h3 className="header" style={{ color: "black" }}>
                    Customize Waiting Room
                  </h3>
                </Link>
              </div>
            </div>

            {/* Settings */}

            <div className="card">
              <div className="image">
                <Link to="/settings">
                  <i class="fas fa-cogs ico"></i>
                </Link>
              </div>

              <div className="content">
                <Link to="/settings">
                  <h3 className="header" style={{ color: "black" }}>Settings</h3>
                </Link>
              </div>
            </div>

            {/* Meetings */}

            <div className="card">
              <div className="image">
                <Link to="/meetings">
                  <i class="far fa-handshake ico"></i>
                </Link>
              </div>

              <div className="content">
                <Link to="/meetings">
                  <h3 className="header" style={{ color: "black" }}>Meeting History</h3>
                </Link>
              </div>
            </div>

            {/* Help */}

            <div className="card">
              <div className="image">
                <Link to="/help">
                  <i class="far fa-life-ring ico"></i>
                </Link>
              </div>
              <div className="content">
                <Link to="/help">
                  <h3 className="header" style={{ color: "black" }}>Help Center</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//  EXPORTING APP
export default DoctorConfig;
