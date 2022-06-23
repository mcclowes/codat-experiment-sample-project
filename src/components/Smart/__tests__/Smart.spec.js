import Smart from "../Smart";
import React from "react";
import { shallow } from "enzyme";

const DEFAULT_PROPS = {};

const renderComponent = (newProps) => {
  const props = {
    ...DEFAULT_PROPS,
    ...newProps,
  };

  return shallow(<Smart {...props} />);
};

let wrapper;

describe("Smart", () => {
  it("renders default component", () => {
    wrapper = renderComponent();

    expect(wrapper).toMatchSnapshot();
  });
});
