export const fetchHotels = () =>
  $.ajax({
    method: "GET",
    url: "api/hotels"
  });
