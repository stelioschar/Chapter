import React from "react";
import { render } from "@testing-library/react";

import LoginToProduct1 from ".";

describe("FeaturesProduct1", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<LoginToProduct1 />);
    expect(baseElement).toBeTruthy();
  });
});
