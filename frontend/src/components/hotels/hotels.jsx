import React from 'react';
import axios from 'axios';
import StarRatingComponent from 'react-star-rating-component';

class Hotels extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      lat: '37.7749',
      lng: '-122.4194',
      checkIn: '2018-11-01',
      checkOut: '2018-11-03'
    }
  }

  // change interpolations to this.props
  getHotels = () => {
    axios
      .get(
        `http://api.sandbox.amadeus.com/v1.2/hotels/search-circle?latitude=${this.state.lat}&longitude=${this.state.lng}&radius=50&check_in=${this.state.checkIn}&check_out=${this.state.checkOut}&number_of_results=50&apikey=AvrAMRvVBrXJA89mKwfYTtRWkufuwAZI`
      )
      .then((response) => {
        this.setState({ data: response.data.results });
      })
  }

  // either do it inside .then or change another .then to manipulate data
  // could also use setState if youre trying to update component
  // promise.resolve to send data out of the asynchronous call

  createStars = (el) => {
    let stars; 
    stars = (el.awards[0] === undefined) ? (
      (stars = 0)
    ) : (
        (stars = el.awards[0].rating)
      )
      return stars;
  }

  checkBreakfast = (el) => {
    let test;
    el.rooms.forEach( obj => {
      // console.log(obj.descriptions);
      obj.descriptions.forEach( desc => {
        // console.log(desc);
        if (desc.toLowerCase().includes("breakfast")) {
            test = (<div>
              "there is breakfast"
            </div>)
          ;
        } else {
          test =
          <div>
            "NO breakfast"
          </div>
        }
      })
    })
    console.log(test)
    return test;
  }

  render() {
    let stars;

    return <div>
        <div className="hotels">
          <form onSubmit={this.getHotels}>
            <input type="submit" value="Submit" />
          </form>
          <div className="hotels-container">
            {this.state.data.map(el => (
              <div className="individual-selection">
                <div className="hotel-stats-container">
                  <div className="hotel-name-price-container">
                    <span className="hotel-name">{el.property_name}</span>
                    <span className="hotel-price">
                      {el.total_price.amount} USD - Total
                    </span>
                  </div>
                  <div className="hotel-rating" />
                  <div className="hotel-address">
                    {el.address.line1} <br />
                    {el.address.city}
                    ,&nbsp;
                    {el.address.postal_code}
                    &nbsp;
                    {el.address.country}
                  </div>
                  <div className="marketing-text">
                    {el.marketing_text}
                    <br />
                    {el.amenities.map(ele => {
                      if (ele.amenity.toLowerCase().includes("internet")) {
                        return <div>render internet icons here</div>;
                      }
                    })}
                  </div>
                  <div className="image-container">
                    {(stars = this.createStars(el))}
                  <div>{ this.checkBreakfast(el) }</div>
                  </div>
                  <div className="testing">
                    <StarRatingComponent
                      name="rate1"
                      starCount={5}
                      value={stars}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>;
  }
}


export default Hotels;
{/* { this.checkBreakfast(el) } */}


// componentDidMount(){
//   axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=hotel&key=AIzaSyBQzt2BjKglqfdpP4fb1d5beRvYK0A45ac`)
//     .then(response => {
//       locationObj = JSON.parse(response)
//       const locations = response.data.results;
//       this.setState({ locations })
//     })
// }


// QUESTIONS:
// what is loading: true and loading: false
// will we have rendering problem if we pull the hotels data from componentDidMount rather than passing it down from the state
// if no rendering problem, how can we let user favorite/save chosen hotels?
// where are the hotel prices?


// amadeus key 
// AvrAMRvVBrXJA89mKwfYTtRWkufuwAZI