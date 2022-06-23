import DataTypes from "../DataTypes";
import React from "react";
import { shallow } from "enzyme";

it("renders component", () => {
  const wrapper = shallow(<DataTypes />);

  expect(wrapper).toMatchSnapshot();
});
