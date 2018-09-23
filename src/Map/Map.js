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

// EXAMPLE OF DATA MODEL FOR MARKERS:
const markers = [
  { markerOffset: -25, name: "Buenos Aires", coordinates: [-58.3816, -34.6037] }
]

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
              <Markers>
              {markers.map((marker, i) => (
                <Marker
                  key={i}
                  marker={marker}
                  style={{
                    default: { fill: "#FF5722" },
                    hover: { fill: "#FFFFFF" },
                    pressed: { fill: "#FF5722" },
                  }}
                  >
                  <circle
                    cx={0}
                    cy={0}
                    r={10}
                    style={{
                      stroke: "#FF5722",
                      strokeWidth: 3,
                      opacity: 0.9,
                    }}
                  />
                  <text
                    textAnchor="middle"
                    y={marker.markerOffset}
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fill: "#607D8B",
                    }}
                    >
                    {marker.name}
                  </text>
                </Marker>
              ))}
            </Markers>
            </ZoomableGroup>
          </ComposableMap>
        </div>
      </div>
    );
  }
}

export default Map;
