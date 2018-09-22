import React, { Component } from "react";
import "./Landing.css";
import Header from "./Header/Header";
import Map from "./Map/Map";
import Footer from "./Footer/Footer";

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Map />
        <Footer />
      </div>
    );
  }
}

export default Landing;
