import React from 'react';
import FlightPriceItem from './flight_price_item';
import axios from 'axios';

class FlightPrice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flight: null,
      currentDate: null,
      nearestAirport: null,
      destinationAirport: null,
      dropdownVisible: false
    };

    this.flightPriceRequest = this.flightPriceRequest.bind(this);
    this.renderDropDown = this.renderDropDown.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  componentDidMount() {
    // this.props.fetchDestination();
    // this.props.fetchLocation();
    // this.props.fetchFlightPrice();
  }

  componentWillMount() {
    this.nearestAirport('-122.40135179999999', '37.7989666', '-0.3983926967030129', '47.18662787406336'); // Appacademy -> france
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .pinDestination(this.state)
      .then(() => this.props.history.push("/"));
  }

  nearestAirport(nearlong, nearlat, destlong, destlat) {
    axios
      .get(
        `https://api.sandbox.amadeus.com/v1.2/airports/nearest-relevant?apikey=RUMhsHJvwFBRMMzCJ1w5mRYvWizwbeYm&latitude=${nearlat}&longitude=${nearlong}`
        )
      .then(response => {
        this.setState({ nearestAirport: response.data });
      })
      .catch(err => {
        console.log(err);
      });

    axios
      .get(
        `https://api.sandbox.amadeus.com/v1.2/airports/nearest-relevant?apikey=RUMhsHJvwFBRMMzCJ1w5mRYvWizwbeYm&latitude=${destlat}&longitude=${destlong}`
      )
      .then(response => {
        this.setState({ destinationAirport: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }


  flightPriceRequest(locAirport, destAirport) {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate() + 1;
    console.log(year)
    console.log(month)
    console.log(day)
    axios
      .get(
      `https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?apikey=RUMhsHJvwFBRMMzCJ1w5mRYvWizwbeYm&origin=${locAirport}&destination=${destAirport}&departure_date=${year}-${month}-${day}&number_of_results=1`
      )
      .then(response => {
        this.setState({ flight: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  stringifyBoolean(notString) {
    if (notString === true) {
      return "Yes";
    } else {
      return "No";
    }
  }

  renderDropDown(input) {
    let dropdownVisible = this.state.dropdownVisible;
    return !dropdownVisible ? null : input;
  }

  toggleDropdown() {
    let dropdownVisible = !this.state.dropdownVisible;
    this.setState({ dropdownVisible });
  }

  availFlight(combinedFlights) {
    let outbound = this.state.flight.results[0].itineraries[0].outbound;
    let lastFlight = outbound.flights[outbound.flights.length - 1];
    return (
      <div>
        <div className="initial-flight-display" onClick={this.toggleDropdown}>
          <img className="flight-icon" src="" />
          <div>
            Flight Price: {this.state.flight.results[0].fare.total_price}
          </div>
          <div>Duration: {outbound.duration}</div>
          <div>
            Path:
            {outbound.flights[0].origin.airport}
            to {lastFlight.destination.airport}
          </div>
          <div>Stops: {outbound.flights.length - 1}</div>
          <div>One Way</div>
        </div>
        {this.renderDropDown(combinedFlights)}
        <form className="flight-booking" onSubmit={this.handleSubmit}>
          <input type="submit" value="Book Now!" />
        </form>
      </div>
    );
  }

  noFlight() {
    return (
      <div className="initial-flight-display">
        <img className="flight-icon" src="" />
        <div>Flight Price: -</div>
        <div>Duration: -</div>
        <div>Path: -</div>
        <div>Stops: -</div>
        <div>One Way</div>
      </div>
    );
  }

  render() {
    let combinedFlights;
    if (this.state.nearestAirport !== null && this.state.destinationAirport !== null) {
      this.flightPriceRequest(this.state.nearestAirport[0].airport, this.state.destinationAirport[0].airport);
    }

    if (this.state.flight) {
      combinedFlights = this.state.flight.results[0].itineraries[0].outbound.flights.map(
        flight => {
          return <FlightPriceItem key={flight.arrives_at} flight={flight} />;
        }
      );
    }
    return (
      <div className="flight-info-main-container">
        {combinedFlights ? this.availFlight(combinedFlights) : this.noFlight()}
      </div>
    );
  }
}

export default FlightPrice;
