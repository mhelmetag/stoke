import React from "react";
import { shallow } from "enzyme";

import Spot from "./Spot";
import Prediction from "./Prediction";

const SPOT = {
  id: 1,
  surfline_id: "58f7edb9dadb30820bb3fa3d",
  surfline_spot_id: "5842041f4e65fad6a770893f",
  name: "Leo Carillo",
  favorable_swells: ["SSE", "S", "SW", "WSW"],
  gathering_data: true,
};
const PREDICTIONS = [
  {
    id: 2,
    spot_id: 1,
    created_on: "2020-07-05T13:00:25.532917",
    forecasted_for: "2020-07-10T13:00:25.532917",
    surfline_height: 3.5,
    stoke_height: 2,
  },
  {
    id: 1,
    spot_id: 1,
    created_on: "2020-07-05T13:00:25.532917",
    forecasted_for: "2020-07-09T13:00:25.532917",
    surfline_height: 4.5,
    stoke_height: 4.5,
  },
];

describe("<Spot />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Spot spot={SPOT} predictions={PREDICTIONS} />);
  });

  it("renders correct number of predictions", () => {
    expect(wrapper.find(Prediction)).toHaveLength(2);
  });

  it("renders correct order of predictions", () => {
    const predictionIds = wrapper
      .find(Prediction)
      .map((prediction) => prediction.props().prediction.id);

    expect(predictionIds).toEqual([1, 2]);
  });
});
