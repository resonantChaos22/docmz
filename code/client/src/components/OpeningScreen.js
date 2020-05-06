//==============================================================
//  IMPORTING LIBRARIES AND COMPONENTS
//==============================================================

import React from "react";
import { Link } from "react-router-dom";
const axios = require("axios");


class OpeningScreen extends React.Component {

  state = { stuff: ""};

  //  THIS GETS THE DATA FROM API
  componentDidMount = async () => {
    let res = await axios.get("/get_stuff");
    this.setState({stuff: res.data.stuff});
    console.log(this.state.stuff);
  };

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
            <a href="#"></a>
          </div>
        </div>

        <div
          className="ui container"
          style={{ position: "absolute", top: "10%", width: "100%" }}
        >
          <div
            className="ui left fixed segment"
            style={{
              alignContent: "center",
              padding: "17.5%",
              paddingLeft: "5%",
              backgroundImage:
                `url(${this.state.stuff})`,
                // "url('https://images.unsplash.com/photo-1491929536571-bdbc57e72324?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')",
              backgroundSize: "cover",
            }}
          >
            <div style={{ fontSize: "500%", fontWeight: "bolder" }}>
              Welcome!
            </div>
            <br />
            <br />
            <div className="ui huge header">
              Please enter your name to let Dr. {this.props.match.params.id}{" "}
              know who you are-
            </div>
            <form className="ui huge form">
              <div className="field">
                <input type="text" placeholder="Enter your name-" />
              </div>
              <Link to={`/doc/${this.props.match.params.id}/waitingRoom`}>
                <div className="ui huge primary button">Join Waiting Room</div>
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

//  EXPORTING COMPONENT
export default OpeningScreen;
