import React from "react";

import { useQuery } from "react-query";

import { getPredictions } from "../api/getPredictions";
import { getSpots } from "../api/getSpots";

import Spot from "./Spot";

const SpotList = () => {
  const { isLoading: spotsLoading, data: spotsData } = useQuery(
    "spots",
    getSpots
  );
  const { isLoading: predictionsLoading, data: predictionsData } = useQuery(
    "predictions",
    getPredictions
  );

  if (spotsLoading || predictionsLoading) {
    return <div className="container">Loading...</div>;
  } else {
    let spots = spotsData.spots;
    let predictions = predictionsData.predictions;

    let groupedPredictions = {};
    predictions.forEach((prediction) => {
      groupedPredictions[prediction.spot_id] = [
        ...(groupedPredictions[prediction.spot_id] || []),
        prediction,
      ];
    });

    return (
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
    );
  }
};

export default SpotList;
