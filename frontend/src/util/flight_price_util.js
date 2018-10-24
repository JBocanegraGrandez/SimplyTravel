export const retrieveFlightPrice = () => {
  return $.ajax {
    type: 'GET',
    url: `api/flightprice/`
  }
}

export const setFlightPrice = (flightPrice) => {
  return $.ajax {
    type: 'POST',
    url: `api/flightprice/`
    data: flightPrice
  }
}