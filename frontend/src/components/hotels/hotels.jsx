import React from 'react';
import axios from 'axios';

class Hotels extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
    }
  }

  testMe = () => {
    axios
      .get(
        `http://api.sandbox.amadeus.com/v1.2/hotels/search-circle?latitude=43.6&longitude=7.2&radius=50&check_in=2018-11-01&check_out=2018-11-03&number_of_results=50&apikey=AvrAMRvVBrXJA89mKwfYTtRWkufuwAZI`
      )
      .then((response) => {
        this.setState({ data: response.data.results });
      })
  }

  // either do it inside .then or change another .then to manipulate data
  // could also use setState if youre trying to update component
  // promise.resolve to send data out of the asynchronous call

  createStars = stars => { }

  render() {
    let starClass;
    let stars = Math.round(this.state.rating);

    starClass = this.state.rating > 1 ? "real-stars" : "no-stars"

    return <div>
      test meeee again
        <div className="hotels">
        <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBQzt2BjKglqfdpP4fb1d5beRvYK0A45ac&libraries=places"></script>
        <form onSubmit={this.testMe}>
          <input type="submit" value="Submit" />
        </form>
        <div className="hotels-container">
          {this.state.data.map((el) => (
            <div className="individual-selection">
              <div className="hotel-stats-container">
                <div className="hotel-name-price-container">
                  <span className="hotel-name">
                    {el.property_name}
                  </span>
                  <span className="hotel-price">
                    {el.total_price.amount} USD
                    </span>
                </div>
                <div className="hotel-rating">

                </div>
                <div className="hotel-address">
                  {el.address.line1} <br />
                  {el.address.city},&nbsp;
                  {el.address.postal_code}&nbsp;
                  {el.address.country}
                </div>
                <div className="marketing-text">
                  {el.marketing_text}
                  <br />
                  {el.amenities.map(ele => {
                    if (ele.amenity.toLowerCase().includes("internet")) {
                      return (<div>render something</div>)
                    }
                  })}
                </div>
                <div className="image-container">
                  {
                    (el.awards[0] === undefined) ? (
                      (stars = 0) || null
                    ) : (
                        (stars = el.awards[0].rating) && null
                      )
                  }



                </div>

                <div className="testing">{stars}</div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  }
}


export default Hotels;


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