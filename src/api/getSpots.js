const { REACT_APP_STOKE_ARCHIVES_URL } = process.env;

export const getSpots = async () => {
  const response = await fetch(`${REACT_APP_STOKE_ARCHIVES_URL}/spots`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
