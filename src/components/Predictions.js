import React from "react";

import Spot from "./Spot";

const Predictions = ({
  spotsLoading,
  spots,
  predictionsloading,
  predictions,
}) => {
  if (spotsLoading || predictionsloading) {
    return (
      <section className="section" style={{ minHeight: "80vh" }}>
        <div className="container">Loading...</div>
      </section>
    );
  } else {
    let groupedPredictions = {};
    predictions.forEach((prediction) => {
      groupedPredictions[prediction.spot_id] = [
        ...(groupedPredictions[prediction.spot_id] || []),
        prediction,
      ];
    });

    return (
      <section className="section" style={{ minHeight: "80vh" }}>
        <div className="container">
          <div className="columns is-multiline">
            {Object.entries(groupedPredictions).map(([spotId, predictions]) => {
              return (
                <Spot spots={spots} spotId={spotId} predictions={predictions} />
              );
            })}
          </div>
        </div>
      </section>
    );
  }
};

export default Predictions;
