import React from "react";
import { render } from "@testing-library/react";

import LoginToProduct2 from ".";

describe("FeaturesProduct2", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<LoginToProduct2 />);
    expect(baseElement).toBeTruthy();
  });
});
