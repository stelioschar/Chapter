import React from "react";
import { render } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";

import App from "./app";

describe("App", () => {
  it("should render the [BASE ELEMENT]", () => {
    const { baseElement } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    expect(baseElement).toBeTruthy();
  });

  it("should render [WELCOME MESSAGE]", () => {
    const { getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    expect(getByText("Welcome to Product1:Frontend")).toBeTruthy();
  });
});
