import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { MainTheme } from "@chapter/Features/Themes";
import { ThemeProvider } from "emotion-theming";

import App from "./app";

describe("App", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <BrowserRouter>
        <ThemeProvider theme={MainTheme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>,
    );

    expect(baseElement).toBeTruthy();
  });

  it("should have a greeting as the title", () => {
    const { getByText } = render(
      <BrowserRouter>
        <ThemeProvider theme={MainTheme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>,
    );

    expect(getByText("Welcome to Product3:Frontend!")).toBeTruthy();
  });
});
