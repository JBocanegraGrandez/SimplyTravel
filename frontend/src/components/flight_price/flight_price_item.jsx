import React from 'react';

const FlightPriceItem = ({flight}) => {
  return (
    <div className="flight-info-container">
      <div className="flight-info">From: {flight.origin.airport} Terminal: {flight.origin.terminal}</div>
      <div className="flight-info">
        Destination: {flight.destination.airport}
        Terminal: {flight.destination.terminal}
      </div>
      <div className="flight-info">Departure Date: {flight.departs_at}</div>
      <div className="flight-info">Travel Class: {flight.booking_info.travel_class}</div>
    </div>
  )
};

export default FlightPriceItem;