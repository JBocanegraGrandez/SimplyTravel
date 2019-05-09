import React from "react";
import { withRouter } from "react-router-dom";
import LocationSearchInputContainer from "../location_search_bar/location_search_input_container";
import FlightPriceContainer from "../flight_price/flight_price_container";
import HotelsContainer from '../hotels/hotels_container';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: "" };
  }

  openNav() {
    document.getElementById("mySidenav").style.transform = "translateX(0)"; //.style.width = "250px"
  }

  closeNav() {
    document.getElementById("mySidenav").style.transform = "translateX(-100%)";
  }

  render() {
    return <div className="places-autocomplete">
        <div className="open-button-container">
          <img src="https://www.atipso.com/wp-content/uploads/2014/09/icon_send.png" className="open-button" onClick={this.openNav} />
          <div id="mySidenav" className="sidenav">
            <div className="location-container">
              <span className="sidebar-panel" onClick={this.openNav}>
                Your destination is one click away!
              </span>
            </div>
            <img src="https://cdn1.iconfinder.com/data/icons/arrows-ii/24/Material_icons-02-55-512.png" className="closebtn" onClick={this.closeNav} />
            <div className="location-search-container">
              <LocationSearchInputContainer />
            </div>
            <div className="flights-container">
              <FlightPriceContainer />
              <div>
                <img className="airline-logos"
                  src="http://flyingfood.com/wp-content/uploads/2014/01/airline-Catering-Customers-Slide5-1170x300.jpg" alt="" />
              </div>
            </div>
            <div className="hotels-container">
              <HotelsContainer />
              {/* <div className="hotels-inside-container">
                <img src="https://www.bingleywalkersarewelcome.org.uk/wp-content/uploads/2015/06/icon-hotel.png" className="hotel-icon" />
                <span className="hotel-name">Fairmont Hotel</span>
                <span className="hotel-price">$138</span>
              </div>
              <div className="hotels-inside-container-2">
                <span className="hotel-location">
                  950 Mason St, San Francisco, CA 94108, United States
                </span>
                <div className="container-3">
                  <span className="hotel-rating">
                    4 Stars
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Star_rating_4_of_5.png" className="rating-img" />
                  </span>
                  <span className="optional-breakfast">
                    {" "}
                    Breakfast
                    <img src="https://cdn1.iconfinder.com/data/icons/rcons-drink/16/tea-512.png" className="drink-icon" />
                  </span>
                  <span className="optional-wifi">
                    {" "}
                    Free Wifi
                    <img src="https://images.vexels.com/media/users/3/141424/isolated/preview/e0bb2e1b2183a2d1e675f215ce236e21-wifi-icon-by-vexels.png" className="wifi-icon" />
                  </span>
                </div>
              </div> */}
            </div>
            <div className="aboutus-container">
              <div className="dropdown-categories">
                <a href="#">About Us</a>
                <a href="/login">Log In</a>
                <a href="/signup">Sign Up</a>
                <a href="#">Take me somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>;
  }
}

export default Sidebar;
