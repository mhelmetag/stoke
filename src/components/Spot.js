import React from "react";
import Prediction from "./Prediction";

const Spot = ({ spot, predictions }) => {
  const sortPredictions = (a, b) => {
    if (a.forecasted_for < b.forecasted_for) {
      return -1;
    }
    if (a.forecasted_for > b.forecasted_for) {
      return 1;
    }

    return 0;
  };

  const reportURL = (spotId) => {
    return `https://www.surfline.com/surf-report/whatever/${spotId}`;
  };

  const fourDayPredictions = predictions.slice(0, 4);

  return (
    <div className="column is-full">
      <div className="card">
        <header className="card-header">
          <p className="card-header-title is-uppercase">{spot.name}</p>
          <a
            className="card-header-icon"
            href={reportURL(spot.surfline_spot_id)}
          >
            <span className="icon">
              <i className="fas fa-link"></i>
            </span>
          </a>
        </header>
        <div className="card-content">
          <div className="level">
            {fourDayPredictions.sort(sortPredictions).map((prediction) => {
              return <Prediction key={prediction.id} prediction={prediction} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spot;
