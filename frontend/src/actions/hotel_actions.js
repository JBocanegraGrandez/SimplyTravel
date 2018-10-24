import * HotelAPIUtil from '../utils/hotel_api_util';

export const RECEIVE_HOTELS = "RECEIVE_HOTELS";

const receiveHotels = () => ({
  type: RECEIVE_HOTELS,
  hotels
})

export const fetchHotels = () => dispatch => (
  HotelAPIUtil.fetchHotels().then(hotels => dispatch(receiveHotels(hotels))
  )
