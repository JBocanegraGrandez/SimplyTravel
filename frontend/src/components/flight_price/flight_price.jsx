import React from 'react';
import { Link } from 'react-router-dom';

class FlightPrice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flight: null,
      dropdownVisible: false,
      dropdownVisibleTwo: false
    }

    this.flightPriceRequest = this.flightPriceRequest.bind(this)
  }

  componentDidMount () {
    this.props.fetchDestination();
    // this.props.fetchLocation();
    // this.props.fetchFlightPrice();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.pinDestination(this.state)
      .then(() => this.props.history.push('/'));
  }

  flightPriceRequest() { // locationAirport, destAirport
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open("GET", "https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?apikey=RUMhsHJvwFBRMMzCJ1w5mRYvWizwbeYm&origin=SFO&destination=LON&departure_date=2018-12-25&number_of_results=1", false); // true for asynchronous
      xmlHttp.send(null);
      return JSON.parse(xmlHttp.responseText);

    // credit: https://stackoverflow.com/questions/247483/http-get-request-in-javascript
  }

  stringifyBoolean(notString) {
    if (notString === true) {
      return "Yes"
    } else {
      return "No"
    }
  }

  renderDropDown() {
    let { dropdownVisible } = this.state;
    return !dropdownVisible
      ? null
      : (
        <div></div>
  
      }
  toggleDropdown() {
    let dropdownVisible = !this.state.dropdownVisible;
    this.setState({ dropdownVisible });
  }
  render () {
    let flight;
    if (this.state.flight === null) {
      this.setState(this.flightPriceRequest());
      console.log(flight);
      if (flight.results[0].itineraries[0].outbound.flights.length > 1) {

      } else {
        let a = (
          <div className="flight-info-container">
            <div className="flight-info">Total Price: {this.state.flightPrice}</div>
            <div className="flight-info">From: {this.state.location}</div>
            <div className="flight-info">Destination: {this.state.destination}</div>
            <div className="flight-info">Departure Date: {this.state.departure_date}</div>
            <div className="flight-info">Return Date: {this.state.return_date}</div>
            <div className="flight-info">Travel Class: {this.state.travel_class}</div>
            <div className="flight-info">Flight Duration: {this.state.duration}</div>
            <div className="flight-info">Refundable: {this.stringifyBoolean(this.state.refundable)}</div>
            <form className="flight-booking" onSubmit={this.handleSubmit}>
              <input type="submit" value="Book Now!" />
            </form>
          </div>
        );
      }
    }

    return (
      <div className="flight-info-main-container">
        {this.renderDropDown()}
      </div>
    );
  }
}

export default FlightPrice;

// this.setState({
//   flightPrice: flight.results[0].fare.total_price,
//   location: flight.results[0].itineraries[0].outbound.flights[0].origin.airport, //has airport and terminal kv pair
//   destination: flight.results[0].itineraries[0].outbound.flights[0].destination.airport, //has airport and terminal kv pair
//   departure_date: flight.results[0].itineraries[0].outbound.flights[0].departs_at,
//   return_date: flight.results[0].itineraries[0].outbound.flights[0].arrives_at,
//   adultPassenger: flight.results[0].fare.price_per_adult.total_fare,
//   travel_class: flight.results[0].itineraries[0].outbound.flights[0].booking_info.travel_class,
//   duration: flight.results[0].itineraries[0].outbound.duration,
//   refundable: flight.results[0].fare.restrictions.refundable
// });