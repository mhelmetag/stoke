import React, { useState, useEffect } from "react";

import Predictions from "./components/Predictions";

const { REACT_APP_STOKE_ARCHIVES_URL } = process.env;

function App() {
  const [spotsLoading, setSpotsLoading] = useState(true);
  const [spots, setSpots] = useState([]);
  const [predictionsLoading, setPredictionsLoading] = useState(true);
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    async function fetchSpots() {
      const data = await fetch(`${REACT_APP_STOKE_ARCHIVES_URL}/spots`)
        .then((response) => response.json())
        .then((data) => data);

      if (data && data.spots) {
        setSpots(data.spots);
        setSpotsLoading(false);
      }
    }

    async function fetchPredictions() {
      let data = await fetch(`${REACT_APP_STOKE_ARCHIVES_URL}/predictions`)
        .then((response) => response.json())
        .then((data) => data);

      if (data && data.predictions) {
        setPredictions(data.predictions);
        setPredictionsLoading(false);
      }
    }

    if (spotsLoading) {
      fetchSpots();
    }

    if (predictionsLoading) {
      fetchPredictions();
    }
  }, [spotsLoading, predictionsLoading]);

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
