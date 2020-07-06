import { useState } from "react";

const { REACT_APP_STOKE_ARCHIVES_URL } = process.env;

export const usePredictions = () => {
  const [predictions, setPredictions] = useState([]);

  async function fetchPredictions(loadingCallback) {
    let data = await fetch(`${REACT_APP_STOKE_ARCHIVES_URL}/predictions`)
      .then((response) => response.json())
      .then((data) => data);

    if (data && data.predictions) {
      setPredictions(data.predictions);
      loadingCallback();
    }
  }

  return { fetchPredictions, predictions };
};
