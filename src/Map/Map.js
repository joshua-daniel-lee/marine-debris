import React, { Component } from "react";
import worldMap from "../Assets/world-110m";
import "./Map.css";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography
} from "react-simple-maps";

class Map extends Component {
  render() {
    return (
      <div className="map">
        <div>
          <ComposableMap>
            <ZoomableGroup>
              <Geographies geography={worldMap}>
                {(geographies, projection) =>
                  geographies.map(geography => (
                    <Geography
                      key={geography.id}
                      geography={geography}
                      projection={projection}
                    />
                  ))
                }
              </Geographies>
            </ZoomableGroup>
          </ComposableMap>
        </div>
      </div>
    );
  }
}

export default Map;
