import { useState } from "react";

const { REACT_APP_STOKE_ARCHIVES_URL } = process.env;

export const useSpots = () => {
  const [spots, setSpots] = useState([]);

  async function fetchSpots(loadingCallback) {
    const data = await fetch(`${REACT_APP_STOKE_ARCHIVES_URL}/spots`)
      .then((response) => response.json())
      .then((data) => data);

    if (data && data.spots) {
      setSpots(data.spots);
      loadingCallback();
    }
  }

  return { fetchSpots, spots };
};
