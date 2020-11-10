import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render } from "@testing-library/react";

import MaterialHeader from ".";

describe("FeaturesShared", () => {
  it("should render [BaseElement]", () => {
    const history = createMemoryHistory();
    const { baseElement } = render(
      <Router history={history}>
        <MaterialHeader title="ExampleTitle" buttonText="ExampleButtonText" url="/exampleUrl" />,
      </Router>,
    );
    expect(baseElement).toBeTruthy();
  });

  it("should render [Title, ButtonText] props", () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <MaterialHeader title="ExampleTitle" buttonText="ExampleButtonText" url="/exampleUrl" />,
      </Router>,
    );
    expect(getByText("ExampleTitle")).toBeTruthy();
    expect(getByText("ExampleButtonText")).toBeTruthy();
  });

  it("should render [Buttons Home, URL]", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router history={history}>
        <MaterialHeader title="ExampleTitle" buttonText="ExampleButtonText" url="/exampleUrl" />,
      </Router>,
    );
    expect(getByTestId("button--home")).toBeTruthy();
    expect(getByTestId("button--feature")).toBeTruthy();
  });
});
