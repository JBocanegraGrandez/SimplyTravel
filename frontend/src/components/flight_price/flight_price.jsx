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
    this.nearestAirport = this.nearestAirport.bind(this);
    this.renderDropDown = this.renderDropDown.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // this.props.pinFlightPrice({flight: 699})
    // this.nearestAirport(this.props.location.lng, this.props.location.lat, this.props.destination.lng, this.props.destination.lat); // Appacademy -> france
    // this.nearestAirport('-122.40135179999999', '37.7989666', '-0.3983926967030129', '47.18662787406336'); // Appacademy -> france
  }
  
  componentWillMount() {
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .pinFlightPrice({flight: this.state.flight})
  }

  nearestAirport(nearlong, nearlat, destlong, destlat) {
    axios
      .get(
        `https://api.sandbox.amadeus.com/v1.2/airports/nearest-relevant?apikey= need key here &latitude=${nearlat}&longitude=${nearlong}`
        )
      .then(response => {
        this.setState({ nearestAirport: response.data });
      })
      .catch(err => {
        console.log(err);
      });

    axios
      .get(
        `https://api.sandbox.amadeus.com/v1.2/airports/nearest-relevant?apikey= need key here &latitude=${destlat}&longitude=${destlong}`
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
    //need to padd months if below 10
    console.log(year)
    console.log(month)
    console.log(day)
    axios
      .get(
        `https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?apikey= need key here &origin=${locAirport}&destination=${destAirport}&departure_date=${year}-${month}-${day}&number_of_results=1`
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
    return !dropdownVisible ? null : 
    <div className="flight-info-and-booking-container">
      {input}
      <form className="flight-booking" onSubmit={this.handleSubmit}>
        <input className="flight-booking-submit" type="submit" value="Book Now!" />
      </form>
    </div>

  }

  toggleDropdown() {
    let dropdownVisible = !this.state.dropdownVisible;
    this.setState({ dropdownVisible });
  }

  availFlight(combinedFlights) {
    let outbound = this.state.flight.results[0].itineraries[0].outbound;
    let lastFlight = outbound.flights[outbound.flights.length - 1];
    return (
      <div className='initial-flight-display-container'>
        <div className="initial-flight-display" onClick={this.toggleDropdown}>
          <img className="flight-icon" src="" />
          <div className="initial-flight-info-container">
            <div className="initial-flight-info">
              Price:
            </div>
            <div className="initial-flight-info">
              {this.state.flight.results[0].fare.total_price}
            </div>
          </div>
          <div className="initial-flight-info-container">
            <div className="initial-flight-info">
              Duration: 
            </div>
            <div className="initial-flight-info">
              {outbound.duration}
            </div>
          </div>
          <div className="initial-flight-info-container">
            <div className="initial-flight-info">
              Path:
            </div>
            <div className="initial-flight-info">
              {outbound.flights[0].origin.airport} - {lastFlight.destination.airport}
            </div>
          </div>
          <div className="initial-flight-info-container">
            <div className="initial-flight-info">
              Stops: 
            </div>
            <div className="initial-flight-info">
              {outbound.flights.length - 1
            }</div>
          </div>
          <div className="initial-flight-info-container">
            <div className="initial-flight-info">
              One
            </div>
            <div className="initial-flight-info">
              Way
            </div>
          </div>
        </div>
        {this.renderDropDown(combinedFlights)}
      </div>
    );
  }

  noFlight() {
    return (
      <div className="initial-flight-display">
        <img className="flight-icon" src="" />
        <div className="initial-flight-info-container">
          <div className="initial-flight-info">
            Price:
          </div>
          <div className="initial-flight-info">
            -
          </div>
        </div>
        <div className="initial-flight-info-container">
          <div className="initial-flight-info">
            Duration:
          </div>
          <div className="initial-flight-info">
            -
          </div>
        </div>
        <div className="initial-flight-info-container">
          <div className="initial-flight-info">
            Path:
          </div>
          <div className="initial-flight-info">
            -
          </div>
        </div>
        <div className="initial-flight-info-container">
          <div className="initial-flight-info">
            Stops:
          </div>
          <div className="initial-flight-info">
            -
          </div>
        </div>
        <div className="initial-flight-info-container">
          <div className="initial-flight-info">
            One 
          </div>
          <div className="initial-flight-info">
            Way
          </div>
        </div>
      </div>
    );
  }

  render() {
    let combinedFlights;
    if (this.state.nearestAirport === null && this.state.destinationAirport === null &&
      this.state.flight === null) {
      this.nearestAirport(this.props.location.lng, this.props.location.lat, this.props.destination.lng, this.props.destination.lat); // Appacademy -> france
    }
    if (this.state.nearestAirport !== null && this.state.destinationAirport !== null && 
      this.state.flight === null) {
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
