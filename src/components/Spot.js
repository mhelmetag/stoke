import React from "react";
import Prediction from "./Prediction";

const Spot = ({ spots, spotId, predictions }) => {
  const sortPredictions = (a, b) => {
    if (a.forecasted_for < b.forecasted_for) {
      return -1;
    }
    if (a.forecasted_for > b.forecasted_for) {
      return 1;
    }

    return 0;
  };

  const spot = spots.find((s) => {
    return String(s.id) === spotId;
  });
  const fourDayPredictions = predictions.slice(0, 4);
  const timezoneOffset = new Date().getTimezoneOffset() / 60;

  return (
    <div className="column is-full" key={spot.id}>
      <div className="card">
        <header className="card-header">
          <p className="card-header-title is-uppercase">{spot.name}</p>
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
            {fourDayPredictions.sort(sortPredictions).map((prediction) => {
              return (
                <Prediction
                  timezoneOffset={timezoneOffset}
                  prediction={prediction}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spot;
