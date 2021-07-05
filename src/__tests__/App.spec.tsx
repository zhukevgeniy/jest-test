import React from "react";
import { shallow } from "enzyme";
import { App } from "../App";
import { Counter } from "../Counter";

describe("<App />", () => {
  it("should find Counter component", () => {
    const component = shallow(<App />);

    const divEl = component.find(Counter);

    expect(divEl).toHaveLength(1);
  });
});
