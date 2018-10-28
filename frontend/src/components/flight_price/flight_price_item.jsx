import React from 'react';

const FlightPriceItem = ({flight}) => {
  return (
    <div className="flight-items-container">
      <div className="flight-items">From: {flight.origin.airport} Terminal: {flight.origin.terminal}</div>
      <div className="flight-items">
        Destination: {flight.destination.airport}
        Terminal: {flight.destination.terminal}
      </div>
      <div className="flight-items">Departure Date: {flight.departs_at}</div>
      <div className="flight-items">Travel Class: {flight.booking_info.travel_class}</div>
    </div>
  )
};

export default FlightPriceItem;