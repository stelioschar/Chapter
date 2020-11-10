import React from "react";
import { render } from "@testing-library/react";

import Index from "../pages/index";

import { ThemeProvider } from "emotion-theming";
import { MainTheme } from "@chapter/Features/Themes";

describe("Index", () => {
  it("should render [BaseElement]", () => {
    const { baseElement } = render(
      <ThemeProvider theme={MainTheme}>
        <Index />
      </ThemeProvider>,
    );
    expect(baseElement).toBeTruthy();
  });
  it("should render [Header]", () => {
    const { getByText } = render(
      <ThemeProvider theme={MainTheme}>
        <Index />
      </ThemeProvider>,
    );
    expect(getByText("This is the website for Product1")).toBeTruthy();
  });
  it("should render [Text]", () => {
    const { getByText } = render(
      <ThemeProvider theme={MainTheme}>
        <Index />
      </ThemeProvider>,
    );
    expect(getByText("This is a slogan!")).toBeTruthy();
  });
});
