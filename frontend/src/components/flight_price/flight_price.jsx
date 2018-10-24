import React from 'react';
import { Link } from 'react-router-dom';

class FlightPrice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flightPrice: null
    }

    this.flightPriceRequest = this.flightPriceRequest.bind(this)
  }

  componentDidMount () {
    this.props.fetchDestination();
    // this.props.fetchLocation();
    this.props.fetchFlightPrice();
  }

  handleSubmit(e) {
    e.preventDefault();

  }

  flightPriceRequest() {
    // locationAirport, destAirport
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open("GET", "https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?apikey=RUMhsHJvwFBRMMzCJ1w5mRYvWizwbeYm&origin=SFO&destination=LON&departure_date=2018-12-25&number_of_results=1", false); // true for asynchronous
      xmlHttp.send(null);
      return JSON.parse(xmlHttp.responseText);

    // credit: https://stackoverflow.com/questions/247483/http-get-request-in-javascript
  }

  render () {
    let flightprice;
    if (this.state.flightPrice === null) {
      flightprice = this.flightPriceRequest().results[0].fare.total_price
      this.props.pinFlightPrice(flightprice);
      this.setState({flightPrice: flightprice})
    } else {
      flightprice = this.state.flightPrice;
    }
    return (
      <div className='flight-pricing'>
        <form className='destination-input'>
          <div className='flight-pricing-input'>
            {flightprice}
          </div>
        </form>
      </div> 
    )
  }
}

export default FlightPrice;