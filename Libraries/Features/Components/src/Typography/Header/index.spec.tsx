import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "emotion-theming";

import { MainTheme } from "@chapter/Features/Themes";
import Header from "./";

describe("Heading component", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <ThemeProvider theme={MainTheme}>
        <Header>Header</Header>
      </ThemeProvider>,
    );
    expect(getByText("Header")).toBeTruthy();
  });

  it("renders reender as [Variant H2]", () => {
    const { getByText } = render(
      <ThemeProvider theme={MainTheme}>
        <Header as="h2" size="l">
          Variants header
        </Header>
      </ThemeProvider>,
    );
    expect(getByText("Variants header")).toBeTruthy();
  });
});
