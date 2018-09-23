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
  { markerOffset: -15, name: "Plastic", coordinates: [-58.3816, -12.6037] },
  { markerOffset: -15, name: "Plastic", coordinates: [-43.3816, -45.6037] },
  { markerOffset: -15, name: "Plastic", coordinates: [-28.3816, -32.6037] }
];

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
                      default: { fill: "yellow" },
                      hover: { fill: "gray" },
                      pressed: { fill: "yellow" }
                    }}
                  >
                    <circle
                      cx={0}
                      cy={0}
                      r={10}
                      style={{
                        stroke: "yellow",
                        strokeWidth: 3,
                        opacity: 0.6
                      }}
                    />
                    <text
                      textAnchor="middle"
                      y={marker.markerOffset}
                      style={{
                        fontFamily: "Roboto, sans-serif",
                        fill: "yellow"
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
