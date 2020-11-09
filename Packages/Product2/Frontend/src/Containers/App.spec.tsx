import React from "react";
import { render } from "@testing-library/react";

import { ThemeProvider } from "emotion-theming";
import { BrowserRouter } from "react-router-dom";

import { MainTheme } from "@chapter/Features/Themes";

import App from "./app";

describe("App", () => {
  it("should render the [BASE ELEMENT]", () => {
    const { baseElement } = render(
      <BrowserRouter>
        <ThemeProvider theme={MainTheme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>,
    );

    expect(baseElement).toBeTruthy();
  });

  it("should render [WELCOME MESSAGE]", () => {
    const { getByText } = render(
      <BrowserRouter>
        <ThemeProvider theme={MainTheme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>,
    );

    expect(getByText("Welcome to Product2:Frontend")).toBeTruthy();
  });

  it("should render [CHAPTER-UI MESSAGE]", () => {
    const { getByText } = render(
      <BrowserRouter>
        <ThemeProvider theme={MainTheme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>,
    );

    expect(getByText("Hello Chapter UI, this is Product2!!")).toBeTruthy();
  });
});
