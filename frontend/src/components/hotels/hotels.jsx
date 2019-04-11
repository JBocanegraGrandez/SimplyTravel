import React from 'react';
import axios from 'axios';
import HotelIndexItem from './hotel_index_item';
import HotelsNull from './hotels_null';

var Amadeus = require('amadeus');

var amadeus = new Amadeus({
  clientId: 'ac2GxJR8XjAp73R7S7fMfUuCBfp8hTGZ',
  clientSecret: 'sNyKSDDADPFKeQQv'
});

class Hotels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      price: null,
      name: null,
      address: null,
      rating: null,
      description: null,
      breakfast: null,
      wifi: null
      // lat: '37.7749',
      // lng: '-122.4194',
      // checkIn: '2018-12-20',
      // checkOut: '2018-12-23',
      // flightData: '',
      // lat: this.props.lat,
      // lng: this.props.lng,
      // checkIn: null,
      // checkOut: null,

      // realCheckIn: this.props.results[0].itineraries[0].outbound.flights[-1].arrives_at
    }

    this.fetchHotels = this.fetchHotels.bind(this);
  }

  componentDidMount() {
    this.fetchHotels();
  }

  fetchHotels = () => {
    amadeus.shopping.hotelOffers
      .get({
        latitude: this.props.lat,
        longitude: this.props.lng
      })
      .then(
        response =>
          this.setState(
            {
              price: response.data[0].offers[0].price.total,
              name: response.data[0].hotel.name,
              address:
                response.data[0].hotel.address.lines[0] +
                ", " +
                response.data[0].hotel.address.cityName +
                ", " +
                response.data[0].hotel.address.stateCode +
                " " +
                response.data[0].hotel.address.postalCode,
              rating: parseInt(response.data[0].hotel.rating),
              description: response.data[0].hotel.description.text
            }
          )
      );
    // description: response.data[0].hotel.description.text
    // price: response.data[0].offers[0].price.total;
    // name: response.data[0].hotel.name
    // address: response.data[0].hotel.address.lines[0];
    // response.data[0].hotel.cityName / stateCode / postalCode / countryCode
    // rating: response.data[0].hotel.rating
    // amenities: breakfast - response.data[0].hotel.amenities (find WIFI or WI_FI or breakfast in Array)
    // price currency, name, address, rating, amenities: breakfast, wifi, description
    // this.setState({ data: response.data[0] });
    // }).then(response => console.log(response.data[0]))
  }

  createStars = (rating) => {
    let stars;
    stars = (rating === undefined) ? (
      (stars = 0)
    ) : (
        (stars = rating)
      )
    return stars;
  }

  checkBreakfast = (el) => {
    let breakfast;
    el.rooms.forEach(obj => {
      obj.descriptions.forEach(desc => {
        if (desc.toLowerCase().includes("breakfast")) {
          breakfast = <div>
            Breakfast
              <img className="breakfast-icon" src="https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C203-512.png" />
          </div>;
        }
      })
    })
    return breakfast;
  }

  internetCheck = (arr) => {
    if (!arr) return;
    let check;
    arr.amenities.forEach(amen => {
      if (amen.amenity.toLowerCase().includes("internet")) {
        check = true;
      }
    })
    return check
  }

  successfulRender() {
    let hotels = this.state.data.map((hotel, idx) => {
      if (idx === 0) {
        return (
          <HotelIndexItem
            hotel={hotel}
            createStars={this.createStars}
            checkBreakfast={this.checkBreakfast}
            internetCheck={this.internetCheck}
            key={this.props.key} />
        )
      }
    });
  }

  render() {
    return (
      <div className="hotels">
        {this.props.lat ? <HotelIndexItem
          price={this.state.price}
          address={this.state.address}
          hotel={this.state.name}
          createStars={this.createStars}
          rating={this.state.rating}
          description={this.state.description}
          internetCheck={this.internetCheck}
          checkBreakfast={null}
        /> : <HotelsNull />}
      </div>
    );
  }
}


export default Hotels;