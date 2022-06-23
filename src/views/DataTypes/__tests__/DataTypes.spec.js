import DataTypes from "../DataTypes";
import React from "react";
import { shallow } from "enzyme";

const defaultProps = {};

const renderComponent = (newProps) => {
  const props = {
    ...defaultProps,
    ...newProps,
  };

  return shallow(<DataTypes {...props} />);
};

let wrapper;

it("renders component", () => {
  wrapper = renderComponent();

  expect(wrapper).toMatchSnapshot();
});
