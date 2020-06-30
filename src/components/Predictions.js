import React from "react";

const Predictions = ({
  spotsLoading,
  spots,
  predictionsloading,
  predictions,
}) => {
  const sortPredictions = (a, b) => {
    if (a.forecasted_for < b.forecasted_for) {
      return -1;
    }
    if (a.forecasted_for > b.forecasted_for) {
      return 1;
    }

    return 0;
  };

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
              const fourDayPredictions = predictions.slice(0, 4);

              return (
                <div className="column is-full" key={spot.id}>
                  <div className="card">
                    <header className="card-header">
                      <p className="card-header-title is-uppercase">
                        {spot.name}
                      </p>
                      <a
                        className="card-header-icon"
                        href={`https://www.surfline.com/surf-report/whatever/${spot.surfline_spot_id}`}
                      >
                        <span className="icon">
                          <i className="fas fa-link"></i>
                        </span>
                      </a>
                    </header>
                    <div className="card-content">
                      <div className="level">
                        {fourDayPredictions
                          .sort(sortPredictions)
                          .map((prediction) => {
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
                              >
                                <div>
                                  <p className="is-size-5">
                                    {predictionDateString} UTC
                                  </p>
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
