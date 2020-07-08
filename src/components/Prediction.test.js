import React from "react";
import { shallow } from "enzyme";

import Prediction from "./Prediction";

const timezoneOffset = 7;
const prediction = {
  id: 624,
  spot_id: 8,
  created_on: "2020-07-05T13:00:25.532917",
  forecasted_for: "2020-07-09T13:00:25.532917",
  surfline_height: 3.5,
  stoke_height: 2,
  swell1_height: 2.59,
  swell1_period: 12,
  swell1_direction: 196.88,
  swell2_height: 0.39,
  swell2_period: 4,
  swell2_direction: 196.88,
  swell3_height: 0.89,
  swell3_period: 8,
  swell3_direction: 196.88,
  swell4_height: 0.39,
  swell4_period: 10,
  swell4_direction: 278.44,
  swell5_height: 0,
  swell5_period: 0,
  swell5_direction: 0,
  swell6_height: 0,
  swell6_period: 0,
  swell6_direction: 0,
};

describe("<Prediction />", () => {
  it("renders without crashing", () => {
    shallow(
      <Prediction timezoneOffset={timezoneOffset} prediction={prediction} />
    );
  });

  it("renders date with offset correctly", () => {
    const wrapper = shallow(
      <Prediction timezoneOffset={timezoneOffset} prediction={prediction} />
    );

    expect(wrapper.find("p#date-624").text()).toEqual("7/9/2020");
  });

  it("renders stoke height correctly", () => {
    const wrapper = shallow(
      <Prediction timezoneOffset={timezoneOffset} prediction={prediction} />
    );

    expect(wrapper.find("span#ours-624").text()).toEqual("2 Ft");
  });

  it("renders surfline height correctly", () => {
    const wrapper = shallow(
      <Prediction timezoneOffset={timezoneOffset} prediction={prediction} />
    );

    expect(wrapper.find("span#theirs-624").text()).toEqual("3.5 Ft");
  });
});
