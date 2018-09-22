import React, { Component } from "react";
import "./Header.css";
import Menu from "../Menu/Menu.js";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Menu />
      </div>
    );
  }
}

export default Header;
