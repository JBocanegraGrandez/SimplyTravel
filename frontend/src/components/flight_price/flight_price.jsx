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
      dropdownVisible: false,
      oldDest: null
    };

    this.flightPriceRequest = this.flightPriceRequest.bind(this);
    this.nearestAirport = this.nearestAirport.bind(this);
    this.renderDropDown = this.renderDropDown.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .pinFlightPrice({flight: this.state.flight})
  }

  nearestAirport(nearlong, nearlat, destlong, destlat) {
    if (nearlong !== undefined && nearlat !== undefined && destlong !== undefined && destlat !== undefined) {
      axios
        .get(
          `https://api.sandbox.amadeus.com/v1.2/airports/nearest-relevant?apikey=07tnwsXvMBArtGYtAbIJEX5kAYmNyjR7&latitude=${nearlat}&longitude=${nearlong}`
          )
        .then(response => {
          this.setState({ nearestAirport: response.data });
        })
        .catch(err => {
          console.log(err);
        });

      axios
        .get(
          `https://api.sandbox.amadeus.com/v1.2/airports/nearest-relevant?apikey=07tnwsXvMBArtGYtAbIJEX5kAYmNyjR7&latitude=${destlat}&longitude=${destlong}`
        )
        .then(response => {
          this.setState({ destinationAirport: response.data });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }


  flightPriceRequest(locAirport, destAirport) {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate() + 1;
    //need to padd months if below 10
    if (month < 10) {
      month = "0" + month;
    }

    if (day < 10) {
      day = "0" + day;
    }
    
    console.log(year)
    console.log(month)
    console.log(day)
    axios
      .get(
        `https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?apikey=07tnwsXvMBArtGYtAbIJEX5kAYmNyjR7&origin=${locAirport}&destination=${destAirport}&departure_date=${year}-${month}-${day}&number_of_results=1`
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

  checkFlights() {
    let combinedFlights;

    if (this.state.oldDest !== this.props.destination) {
      this.setState({ oldDest: this.props.destination, nearestAirport: null, destinationAirport: null, flight: null });
    }
    
    if (this.state.nearestAirport === null && this.state.destinationAirport === null &&
      this.state.flight === null) {
      this.nearestAirport(this.props.location.lng, this.props.location.lat, this.props.destination.lng, this.props.destination.lat); // Appacademy -> france
    }

    if (this.state.nearestAirport !== null && this.state.destinationAirport !== null &&
      this.state.flight === null) {
      this.flightPriceRequest(this.state.nearestAirport[0].airport, this.state.destinationAirport[0].airport);
      console.log("check") //problem, the first call makes it 3x
    }
    if (this.state.flight) {
      combinedFlights = this.state.flight.results[0].itineraries[0].outbound.flights.map(
        flight => {
          return <FlightPriceItem key={flight.arrives_at} flight={flight} />;
        }
      );
    }

    if (combinedFlights) {
      return this.availFlight(combinedFlights)
    } else {
      return this.noFlight();
    }
  }

  render() {
    return (
      <div className="flight-info-main-container">
        {this.checkFlights()}
      </div>
    );
  }
}

export default FlightPrice;
