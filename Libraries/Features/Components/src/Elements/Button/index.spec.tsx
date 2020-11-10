import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "emotion-theming";

import { MainTheme } from "@chapter/Features/Themes";

import Button from "./";

describe("Box component", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <ThemeProvider theme={MainTheme}>
        <Button>Submit</Button>
      </ThemeProvider>,
    );
    expect(getByText("Submit")).toBeTruthy();
  });

  it("renders with variant", () => {
    const { getByText } = render(
      <ThemeProvider theme={MainTheme}>
        <Button variant="primary">Submit</Button>
      </ThemeProvider>,
    );
    expect(getByText("Submit")).toBeTruthy();
  });

  it("renders with size variant", () => {
    const { getByText } = render(
      <ThemeProvider theme={MainTheme}>
        <Button size="small">Submit</Button>
      </ThemeProvider>,
    );
    expect(getByText("Submit")).toBeTruthy();
  });
});
