import React, { useState, useEffect } from "react";

const { REACT_APP_STOKE_ARCHIVES_URL } = process.env;

function App() {
  const [spotsLoading, setSpotsLoading] = useState(true);
  const [spots, setSpots] = useState([]);
  const [predictionsloading, setPredictionsLoading] = useState(true);
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    async function fetchSpots() {
      let data = await fetch(`${REACT_APP_STOKE_ARCHIVES_URL}/spots`)
        .then(response => response.json())
        .then(data => data);

      if (data && data.spots) {
        setSpots(data.spots);
        setSpotsLoading(false);
      }
    }

    async function fetchPredictions() {
      let todayDate = new Date();
      let todayDateString = todayDate.toISOString().slice(0, 10);

      let data = await fetch(
        `${REACT_APP_STOKE_ARCHIVES_URL}/predictions?created_on=${todayDateString}`
      )
        .then(response => response.json())
        .then(data => data);

      if (data && data.predictions) {
        setPredictions(data.predictions);
        setPredictionsLoading(false);
      }
    }

    if (spotsLoading) {
      fetchSpots();
    }

    if (predictionsloading) {
      fetchPredictions();
    }
  }, [spotsLoading, predictionsloading]);

  function predictionsComponent() {
    if (spotsLoading || predictionsloading) {
      return <section className="section"></section>;
    } else {
      let groupedPredictions = {};
      predictions.forEach(prediction => {
        groupedPredictions[prediction.spot_id] = [
          ...(groupedPredictions[prediction.spot_id] || []),
          prediction
        ];
      });

      return (
        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              {Object.entries(groupedPredictions).map(
                ([spotId, predictions]) => {
                  let spot = spots.find(s => {
                    return String(s.id) === spotId;
                  });

                  return (
                    <div className="column is-full" key={spot.id}>
                      <div className="card">
                        <div className="card-content">
                          <div className="level">
                            <div className="level-item has-text-centered">
                              <div>
                                <p className="heading">Spot Name</p>
                                <p className="title">{spot.name}</p>
                              </div>
                            </div>
                            {predictions.map(prediction => {
                              let predictionDate = new Date(
                                prediction.forecasted_for
                              );
                              let predictionDateString = predictionDate.toLocaleDateString(
                                "en-US"
                              );

                              return (
                                <div
                                  className="level-item has-text-centered"
                                  key={prediction.id}
                                >
                                  <div>
                                    <p className="heading">
                                      {predictionDateString} UTC
                                    </p>
                                    <p className="title">
                                      {prediction.stoke_height} Ft
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </section>
      );
    }
  }

  return (
    <>
      <section
        className="section"
        style={{ background: "linear-gradient(to bottom right, green, blue" }}
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
      {predictionsComponent()}
      <footer className="footer">
        <div className="content has-text-centered">
          <p>Built by Maxworld Technologies</p>
        </div>
      </footer>
    </>
  );
}

export default App;
