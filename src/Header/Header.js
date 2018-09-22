import React, { Component } from "react";
import "./Header.css";
import Menu from "../Menu/Menu.js";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from "@material-ui/core/Avatar";
// import Logo from "../../assets/Logo.png";

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
