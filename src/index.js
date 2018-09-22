import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Landing from "./Landing";
import registerServiceWorker from "./registerServiceWorker";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#193549" },
    secondary: { main: "#FFFFFF" }
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <div>
      <Landing />
    </div>
  </MuiThemeProvider>,

  document.getElementById("root")
);
registerServiceWorker();
