//==============================================================
//  IMPORTING LIBRARIES AND COMPONENTS
//==============================================================

import React from "react";
import "../styles/config.css";
import Layout from "./Layout";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

//  DEFINING COMPONENT
class Waiting extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Layout />
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
              <h1 className="ui header">Welcome to the waiting room of Dr. {this.props.match.params.id}</h1>
              <h3>To join meeting, click below</h3>
              <br></br>
              <div className="ui huge primary button">Join Video Chat</div>
            </div>
            <div className="ui medium left aligned image">
              <img
                src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="doc"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
};


//  EXPORTING COMPONENT
export default Waiting;
