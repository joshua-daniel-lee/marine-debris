import React, { Component } from "react";
import worldMap from "../Assets/world-110m";
import "./Map.css";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker
} from "react-simple-maps";

class Map extends Component {
  render() {
    return (
      <div className="map">
        <div className="mapGrid">
          <ComposableMap
            projectionConfig={{
              scale: 300,
              rotation: [10, 0, 0]
            }}
          >
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
              <Markers />
            </ZoomableGroup>
          </ComposableMap>
        </div>
      </div>
    );
  }
}

export default Map;
