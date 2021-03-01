const { REACT_APP_STOKE_ARCHIVES_URL } = process.env;

export const getPredictions = async () => {
  const response = await fetch(`${REACT_APP_STOKE_ARCHIVES_URL}/predictions`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
