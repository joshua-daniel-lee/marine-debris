import React, { Component } from "react";
import "./Map.css";
import Button from "@material-ui/core/Button";

class Map extends Component {
  render() {
    return (
      <div className="map">
        <Button variant="contained">Report Debris</Button>
      </div>
    );
  }
}

export default Map;
