const $ = window.$;

export const retrieveDestination = () => {
  return $.ajax ({
    type: 'GET',
    url: `/api/destination/`
  });
};

export const setDestination = (destination) => {
  return $.ajax ({
    type: 'POST',
    url: `/api/destination/`,
    data: destination
  });
};