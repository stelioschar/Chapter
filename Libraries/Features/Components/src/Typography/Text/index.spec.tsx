import React from "react";
import { ThemeProvider } from "emotion-theming";
import { render } from "@testing-library/react";

import { MainTheme } from "@chapter/Features/Themes";

import Text from ".";

describe("FrontendComponents", () => {
  it("should render with [Default Values] if no [Prop] is passed", () => {
    const { baseElement } = render(
      <ThemeProvider theme={MainTheme}>
        <Text />
      </ThemeProvider>,
    );

    expect(baseElement).toBeTruthy();
  });
  it("should render with [Children] if no [Prop] is passed", () => {
    const { getByText } = render(
      <ThemeProvider theme={MainTheme}>
        <Text>Text Element</Text>
      </ThemeProvider>,
    );
    expect(getByText("Text Element")).toBeTruthy();
  });
});
