import React from 'react';
const axios = require('axios');

class Hotels extends React.Component {
  constructor() {
    super()
    this.state = {
      info: '',
    }
  }

  testMe() {
    axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=hotel&key=AIzaSyBQzt2BjKglqfdpP4fb1d5beRvYK0A45ac`)
      .then(response => console.log(response))
  }

  render() {
    return <div>
      test meeee again
        <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBQzt2BjKglqfdpP4fb1d5beRvYK0A45ac&libraries=places" />
      <form onSubmit={this.testMe}>
        <input type="submit" value="Submit" />
      </form>
    </div>;
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

// handleClick(){
//   axios.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=hotel&key=AIzaSyBQzt2BjKglqfdpP4fb1d5beRvYK0A45ac")
//     .then(response => 
//         const locations = response.data.results;
//       this.setState({ locations })