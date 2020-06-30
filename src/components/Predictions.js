import React from "react";

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
              const spot = spots.find((s) => {
                return String(s.id) === spotId;
              });
              const sevenDayPredictions = predictions.slice(0, 6);

              return (
                <div className="column is-full" key={spot.id}>
                  <div className="card">
                    <header className="card-header">
                      <p className="card-header-title">{spot.name}</p>
                    </header>
                    <div className="card-content">
                      <div className="level">
                        {sevenDayPredictions.map((prediction) => {
                          const predictionDate = new Date(
                            prediction.forecasted_for
                          );
                          const predictionDateString = predictionDate.toLocaleDateString(
                            "en-US"
                          );

                          return (
                            <div
                              className="level-item has-text-centered"
                              key={prediction.id}
                              style={{
                                border: "0.05em solid black",
                                margin: "2vw",
                              }}
                            >
                              <div>
                                <p className="heading">
                                  {predictionDateString} UTC
                                </p>
                                <p>
                                  <span className="heading">Ours</span>
                                  <span className="title">
                                    {prediction.stoke_height} Ft
                                  </span>
                                </p>
                                <p>
                                  <span className="heading">Theirs</span>
                                  <span className="title">
                                    {prediction.surfline_height} Ft
                                  </span>
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
            })}
          </div>
        </div>
      </section>
    );
  }
};

export default Predictions;
