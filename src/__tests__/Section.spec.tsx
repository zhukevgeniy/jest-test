import * as React from "react";
import { shallow } from "enzyme";
import { Section } from "../Section";

describe("<Section />", () => {
  let props: React.ComponentProps<typeof Section>;

  beforeEach(() => {
    props = {
      onMount: jest.fn(),
    };
  });

  it("should _", () => {
    jest.spyOn(React, "useEffect").mockImplementation((fn) => fn());

    shallow(<Section {...props} />);

    expect(props.onMount).toHaveBeenCalled();
  });
});
