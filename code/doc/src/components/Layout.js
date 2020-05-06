//==============================================================
//  IMPORTING LIBRARIES AND COMPONENTS
//==============================================================

import React from "react";
import "../styles/layout.css";

//  DEFINING LAYOUT COMPONENT
class Layout extends React.Component {
  render() {
    return (
      <div>
        {/* Navbar */}
        <div class="ui fixed menu">
          <div class="ui container">
            <div class="header nav item">
              <i class="large plus icon"></i>DocMZ
            </div>
            <a href="#" class="item nav right">
              Home
            </a>
            <a href="#" class="item nav">
              Services
            </a>
            <a href="#" class="item nav">
              Products
              </a>
            <a href="#" class="item nav">
              Contact Us
            </a>
            <a href="#" class="item nav">
              Logout
            </a>
            <a href="#" ></a>
          </div>
        </div>

        {/* Vertical Menu */}
        <div class="ui left fixed inverted vertical menu">
          <div className="header side item">Waiting List</div>
            <div class="item">Patient1</div>
            <div class="item">Patient2</div>
            <div class="item">Patient3</div>
        </div>
      </div>
    );
  }
}

//  EXPORTING APP
export default Layout;
