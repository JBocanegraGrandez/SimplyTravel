import React from "react";
import { withRouter } from "react-router-dom";
import LocationSearchInput from "../location_search_bar/location_search_input";
import FlightPriceContainer from "../flight_price/flight_price_container";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: "" };
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "408px"; //.style.width = "250px"
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0"; //.style.width = "0"
  }

  render() {
    return (
      <div className="places-autocomplete">
        <div className="open-button-container">
          <img
            src="https://www.atipso.com/wp-content/uploads/2014/09/icon_send.png"
            className="open-button"
            onClick={this.openNav}
          />
          <div id="mySidenav" className="sidenav">
            <LocationSearchInput />
            <img
              src="http://cdn.onlinewebfonts.com/svg/img_403289.png"
              className="closebtn"
              onClick={this.closeNav}
            />
            <div className="location-container">
              <span className="sidebar-panel" onClick={this.openNav}>
                Where do you want to go?
              </span>
            </div>
            <div className="flights-container" >
              <FlightPriceContainer />
            </div>
            <div className="hotels-container">
              <div className="hotels-inside-container">
                <img
                  src="https://www.bingleywalkersarewelcome.org.uk/wp-content/uploads/2015/06/icon-hotel.png"
                  className="hotel-icon"
                />
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
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Star_rating_4_of_5.png"
                      className="rating-img"
                    />
                  </span>
                  <span className="optional-breakfast">
                    {" "}
                    Breakfast
                    <img
                      src="https://cdn1.iconfinder.com/data/icons/rcons-drink/16/tea-512.png"
                      className="drink-icon"
                    />
                  </span>
                  <span className="optional-wifi">
                    {" "}
                    Free Wifi
                    <img
                      src="https://images.vexels.com/media/users/3/141424/isolated/preview/e0bb2e1b2183a2d1e675f215ce236e21-wifi-icon-by-vexels.png"
                      className="wifi-icon"
                    />
                  </span>
                </div>
              </div>
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
      </div>
    );
  }
}

export default Sidebar;
