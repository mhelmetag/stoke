import React from "react";

const Prediction = ({ timezoneOffset, prediction }) => {
  const predictionDate = new Date(prediction.forecasted_for);
  predictionDate.setHours(predictionDate.getHours() - timezoneOffset);
  const predictionDateString = predictionDate.toLocaleDateString("en-US");

  return (
    <div className="level-item has-text-centered" key={prediction.id}>
      <div>
        <p className="is-size-5">{predictionDateString}</p>
        <p>
          <span className="is-size-7">Ours </span>
          <span className="is-size-4 has-text-weight-bold">
            {prediction.stoke_height} Ft
          </span>
        </p>
        <p>
          <span className="is-size-7">Theirs </span>
          <span className="is-size-4 has-text-weight-bold">
            {prediction.surfline_height} Ft
          </span>
        </p>
      </div>
    </div>
  );
};

export default Prediction;
