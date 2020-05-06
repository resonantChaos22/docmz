//==============================================================
//  IMPORTING LIBRARIES AND COMPONENTS
//==============================================================

import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "../styles/app.css";

const Add = ({ match }) => {
  return (
    <div>
      <div className="ui container">
        <div className="ui segment">
          <Link to="/custom">
            <div className="ui primary button">Back</div>
          </Link>
          <div className="ui segment">
            <br />
            <h1 className="ui huge header center aligned">
              Add {match.params.id}
            </h1>
            <i className="far fa-plus-square les"></i>
            <br />
            <Link to="/custom">
              <div
                className="ui primary button"
                style={{ display: "flex", justifyContent: "center" }}
              >
                Upload
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

//  EXPORTING COMPONENT
export default Add;
