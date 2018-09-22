import React, { Component } from "react";
import "./Landing.css";
import Header from "./Header/Header";
import Menu from "./Menu/Menu";
import Map from "./Map/Map";
import Form from "./Form/Form";
import Button from "./Button/Button";
import Footer from "./Footer/Footer";

class Landing extends Component {
  render() {
    return (
      <div>
        <Header />
        <Menu />
        <Map />
        <Form />
        <Button />
        <Footer />
      </div>
    );
  }
}

export default Landing;
