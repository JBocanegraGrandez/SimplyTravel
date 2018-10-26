import React from 'react';
import FlightPriceItem from './flight_price_item';
import axios from 'axios';
import { Link } from 'react-router-dom';

class FlightPrice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flight: null,
      dropdownVisible: false
    }

    this.flightPriceRequest = this.flightPriceRequest.bind(this)
    this.renderDropDown = this.renderDropDown.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  componentDidMount() {
    // this.props.fetchDestination();
    // this.props.fetchLocation();
    // this.props.fetchFlightPrice();
  }

  componentWillMount() {
    this.flightPriceRequest();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.pinDestination(this.state)
      .then(() => this.props.history.push('/'));
  }

  flightPriceRequest() { // locationAirport, destAirport
    axios.get("https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?apikey=RUMhsHJvwFBRMMzCJ1w5mRYvWizwbeYm&origin=SFO&destination=LON&departure_date=2018-12-25&number_of_results=1")
      .then(response => {
        this.setState({test: 'test'});
        this.setState({flight: response.data})
      })
      .catch(err => {
        console.log(err)
      })
  }

  stringifyBoolean(notString) {
    if (notString === true) {
      return "Yes"
    } else {
      return "No"
    }
  }

  renderDropDown(input) {
    let dropdownVisible = this.state.dropdownVisible;
    return (
      !dropdownVisible
      ? null
      : 
      input
    )
  }

  toggleDropdown() {
    let dropdownVisible = !this.state.dropdownVisible;
    this.setState({ dropdownVisible });
  }

  availFlight(flights) {
    let outbound = this.state.flight.results[0].itineraries[0].outbound;
    let lastFlight = outbound.flights[0];
    console.log(lastFlight)
    return(
      <div>
        <div className="initial-flight-display" onClick={(this.toggleDropdown)} >
          <img className="flight-icon" src="" />
          <div>Flight Price: {this.state.flight.results[0].fare.total_price}</div>
          <div>Duration: {outbound.duration}</div>
          <div>Path: 
            {outbound.flights[0].origin.airport}
            to {lastFlight.destination.airport}
          </div>
          <div>Stops: {outbound.flights.length - 1}</div>
          <div>One Way</div>
        </div>
        {this.renderDropDown(flights)}
        <form className="flight-booking" onSubmit={this.handleSubmit}>
          <input type="submit" value="Book Now!" />
        </form>
      </div>
    )
  }

  noFlight() {
    return(
    <div className="initial-flight-display" >
      <img className="flight-icon" src="" />
      <div>Flight Price: -</div>
      <div>Duration: -</div>
      <div>Path: -</div>
      <div>Stops: -</div>
      <div>One Way</div>
    </div>
    )
  }

  render () {
    let flights;
    if (this.state.flight) {
      flights = this.state.flight.results[0].itineraries[0].outbound.flights.reverse().map(
        flight => {
          return (
            <FlightPriceItem flight={flight} />
            // <div className="flight-info-container">
            //   <div className="flight-info">From: {flight.origin.airport} Terminal: {flight.origin.terminal}</div>
            //   <div className="flight-info">
            //     Destination: {flight.destination.airport} 
            //     Terminal: {flight.destination.terminal}
            //   </div>
            //   <div className="flight-info">Departure Date: {flight.departs_at}</div>
            //   <div className="flight-info">Travel Class: {flight.booking_info.travel_class}</div>
            // </div>
          );
        }
      );
      console.log(this.state)
    }
    return (
      <div className="flight-info-main-container">
        {flights ? this.availFlight(flights) : this.noFlight()}
      </div>
    );
  }
}

export default FlightPrice;
