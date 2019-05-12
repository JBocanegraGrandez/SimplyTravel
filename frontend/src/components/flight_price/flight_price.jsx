import React from 'react';
import FlightPriceItem from './flight_price_item';
// import axios from 'axios';

var Amadeus = require('amadeus');

var amadeus = new Amadeus({
  clientId: 'JRgIyoVdBIZtRtlAaBrdjeETPAzLGXVT',
  clientSecret: 'psWy6pSHE2gsOY0t'
});

class FlightPrice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flight: null,
      currentDate: null,
      nearestAirport: null,
      destinationAirport: null,
      dropdownVisible: false,
      oldDest: null,
    };

    this.count = 0;

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

  nearestAirport(nearlong = -122.401352, nearlat = 37.798967, destlong, destlat) { //working on new developer portal
    if (nearlong !== undefined && nearlat !== undefined && destlong !== undefined && destlat !== undefined) {
      amadeus.client
        .get("/v1/reference-data/locations/airports", {
          longitude: `${nearlong}`, //-122.401352
          latitude: `${nearlat}` //37.798967
        })
        .then(response => {
          this.setState({ nearestAirport: response.data[0].iataCode }, () => {
            amadeus.client
              .get('/v1/reference-data/locations/airports', {
                latitude: `${destlat}`,
                longitude: `${destlong}`
              })
              .then(response => {
                this.setState({ destinationAirport: response.data[0].iataCode });
              })
              .catch(err => {
                console.log(err);
                alert('There are no nearby airports at that destination. Enter another destination.');
              });
          });
        })
        .catch(err => {
          console.log(err);
          alert('There are no airports near you. Enter another location you want to start from.');
        });
    }
  }


  flightPriceRequest(locAirport, destAirport) { //working on new developer portal
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate() + 1;
    
    //padding if month and day below 10
    if (month < 10) {
      month = "0" + month.toString();
    }
    
    if (day < 10) {
      day = "0" + day.toString();
    }

    amadeus.client
      .get("/v1/shopping/flight-offers", {
        origin: `${locAirport}`,
        destination: `${destAirport}`,
        departureDate: `${year}-${month}-${day}`,
        adults: `1`,
        max: `1`
      })
      .then(response => {
        this.setState({ flight: response.data[0].offerItems[0] });
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
    let outbound = this.state.flight.services[0].segments,
        lastFlight = outbound[outbound.length - 1],
        // moreThanADay = Number(outbound[0].flightSegment.duration.slice(0,1)),
        parsedDuration = outbound[0].flightSegment.duration.slice(3);

    // if (moreThanADay === 1) {
    //   parsedDuration
    // }

    return (
      <div className='initial-flight-display-container'>
        <div className="initial-flight-display" onClick={this.toggleDropdown}>
          <img className="flight-icon" src="" />
          <div className="initial-flight-info-container">
            <div className="initial-flight-info">
              Price:
            </div>
            <div className="initial-flight-info">
              {this.state.flight.price.total}
            </div>
          </div>
          <div className="initial-flight-info-container">
            <div className="initial-flight-info">
              Duration: 
            </div>
            <div className="initial-flight-info">
              {parsedDuration}
            </div>
          </div>
          <div className="initial-flight-info-container">
            <div className="initial-flight-info">
              Path:
            </div>
            <div className="initial-flight-info">
              {outbound[0].flightSegment.departure.iataCode} - {lastFlight.flightSegment.arrival.iataCode}
            </div>
          </div>
          <div className="initial-flight-info-container">
            <div className="initial-flight-info">
              Stops: 
            </div>
            <div className="initial-flight-info">
              {outbound.length - 1}
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
      this.setState({ oldDest: this.props.destination, nearestAirport: null, destinationAirport: null, flight: null }, () => {
        this.nearestAirport(this.props.location.lng, this.props.location.lat, this.props.destination.lng, this.props.destination.lat);
      });
    }

    else if (this.state.nearestAirport !== null && this.state.destinationAirport !== null &&
      this.state.flight === null) {
      this.flightPriceRequest(this.state.nearestAirport, this.state.destinationAirport);
    }
    else if (this.state.flight) {
      combinedFlights = this.state.flight.services[0].segments.map(
        flight => {
          return <FlightPriceItem key={flight.flightSegment.arrival.at} flight={flight} />;
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
    // amadeus.client
    //   .get("/v1/shopping/flight-offers", {
    //     origin: `SFO`,
    //     destination: `TPE`,
    //     departureDate: `2019-02-12`,
    //     adults: `1`,
    //     max: `1`
    //   })
    //   .then(res => console.log(res.data[0].offerItems[0]));
    return (
      <div className="flight-info-main-container">
        {this.checkFlights()}
      </div>
    );
  }
}

export default FlightPrice;
