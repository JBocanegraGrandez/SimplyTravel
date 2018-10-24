export const retrieveUserLocation = () => {
  return $.ajax {
    type: 'GET',
      url: `api/location/`
  };
};

export const setUserLocation = (location) => {
  return $.ajax {
    type: 'POST',
      url: `api/location/`
    data: location
  };
};