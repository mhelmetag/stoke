import React, { useState, useEffect } from "react";

import Predictions from "./components/Predictions";
import { useSpots } from "./hooks/useSpots";
import { usePredictions } from "./hooks/usePredictions";

function App() {
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
  }, [fetchSpots, spotsLoading, fetchPredictions, predictionsLoading]);

  return (
    <>
      <section
        className="section"
        style={{ background: "linear-gradient(to bottom right, orange, red" }}
      >
        <div className="container">
          <div className="level">
            <div className="level-left">
              <div className="level-item">
                <h1 className="title has-text-white">Stoke</h1>
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">
                <a href="https://github.com/mhelmetag/stoke">
                  <span className="icon is-large">
                    <i className="fab fa-lg fa-github has-text-white"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Predictions
        spotsLoading={spotsLoading}
        spots={spots}
        predictionsLoading={predictionsLoading}
        predictions={predictions}
      />
      <footer className="footer">
        <div className="content has-text-centered">
          <p>Built by Maxworld Technologies</p>
        </div>
      </footer>
    </>
  );
}

export default App;
