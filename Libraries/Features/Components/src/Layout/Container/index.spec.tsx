import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "emotion-theming";

import { MainTheme } from "@chapter/Features/Themes";

import Container from "./";

describe("Container component", () => {
  it("renders with [Children]", () => {
    const { getByText } = render(
      <ThemeProvider theme={MainTheme}>
        <Container>Contain it</Container>
      </ThemeProvider>,
    );
    expect(getByText("Contain it")).toBeTruthy();
  });
});
