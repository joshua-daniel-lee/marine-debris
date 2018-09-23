import React, { Component } from "react";
import "./Header.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <AppBar position="static">
          <Toolbar>{/* <Avatar alt="Logo" src={Logo} /> */}</Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
