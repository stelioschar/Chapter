import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { MainTheme } from "@chapter/Features/Themes";
import { ThemeProvider } from "emotion-theming";

import App from "./app/app";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={MainTheme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"),
);
