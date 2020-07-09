import React from "react";

import Spot from "./Spot";

const SpotList = ({ spots, predictions }) => {
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
            const spot = spots.find((s) => {
              return String(s.id) === spotId;
            });

            return <Spot key={spotId} spot={spot} predictions={predictions} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default SpotList;
