import React from "react";
import { shallow } from "enzyme";

import Prediction from "./Prediction";

const prediction = {
  id: 1,
  spot_id: 1,
  created_on: "2020-07-05T13:00:25.532917",
  forecasted_for: "2020-07-09T13:00:25.532917",
  surfline_height: 3.5,
  stoke_height: 2,
};

describe("<Prediction />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Prediction prediction={prediction} />);
  });

  it("renders date with offset correctly", () => {
    expect(wrapper.find("p#date-1").text()).toEqual("7/9/2020");
  });

  it("renders stoke height correctly", () => {
    expect(wrapper.find("span#ours-1").text()).toEqual("2 Ft");
  });

  it("renders surfline height correctly", () => {
    expect(wrapper.find("span#theirs-1").text()).toEqual("3.5 Ft");
  });
});
