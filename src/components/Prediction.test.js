import React from "react";
import ReactDOM from "react-dom";

import Prediction from "./Prediction";

const timezoneOffset = 7;
const prediction = {
  forecasted_for: "",
  stoke_height: 1,
  surfline_height: 1.5,
};

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Prediction timezoneOffset={timezoneOffset} prediction={prediction} />,
    div
  );
});
