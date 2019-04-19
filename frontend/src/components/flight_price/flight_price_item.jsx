import React from 'react';

const FlightPriceItem = ({flight}) => {
  return (
    <div className="flight-items-container">
      <div className="flight-items">
        From: {flight.flightSegment.departure.iataCode}
        Terminal: {flight.flightSegment.departure.terminal}
      </div>
      <div className="flight-items">
        Destination: {flight.flightSegment.arrival.iataCode}
        Terminal: {flight.flightSegment.arrival.terminal}
      </div>
      <div className="flight-items">Departure Date: {flight.flightSegment.departure.at}</div>
      <div className="flight-items">Travel Class: {flight.pricingDetailPerAdult.travelClass}</div>
    </div>
  )
};

export default FlightPriceItem;

