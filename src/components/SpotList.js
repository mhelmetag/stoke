import React, { useState, useEffect } from "react";

import { useSpots } from "../hooks/useSpots";
import { usePredictions } from "../hooks/usePredictions";

import Spot from "./Spot";

const SpotList = () => {
  const { fetchSpots, spots } = useSpots();
  const { fetchPredictions, predictions } = usePredictions();
  const [spotsLoading, setSpotsLoading] = useState(true);
  const [predictionsLoading, setPredictionsLoading] = useState(true);

  useEffect(() => {
    if (spotsLoading) {
      fetchSpots(() => {
        setSpotsLoading(false);
      });
    }

    if (predictionsLoading) {
      fetchPredictions(() => {
        setPredictionsLoading(false);
      });
    }
  }, [spotsLoading, fetchSpots, predictionsLoading, fetchPredictions]);

  let groupedPredictions = {};
  predictions.forEach((prediction) => {
    groupedPredictions[prediction.spot_id] = [
      ...(groupedPredictions[prediction.spot_id] || []),
      prediction,
    ];
  });

  if (spotsLoading || predictionsLoading) {
    return <div className="container">Loading...</div>;
  } else {
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
