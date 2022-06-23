import CompaniesContainer from "../CompaniesContainer";
import React from "react";
import { shallow } from "enzyme";

it("renders component", () => {
  const wrapper = shallow(<CompaniesContainer />);

  expect(wrapper).toMatchSnapshot();
});
