//==============================================================
//  IMPORTING LIBRARIES AND COMPONENTS
//==============================================================

import React from "react";
import "../styles/layout.css";
import { Link } from 'react-router-dom';

//  DEFINING LAYOUT COMPONENT
class Layout extends React.Component {
  render() {
    console.log(this.props);
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
            <a href="#"></a>
          </div>
        </div>

        {/* Vertical Menu */}
        <div class="ui left fixed inverted vertical menu">
          <div className="header side item">Doctors Available</div>
          <div class="item">Doctor1</div>
          <Link to="/pre">
            <div
              className="ui primary button"
              style={{ position: "absolute", bottom: "15%", left: "20%" }}
            >
              Pre-Call Test{" "}
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

//  EXPORTING APP
export default Layout;
