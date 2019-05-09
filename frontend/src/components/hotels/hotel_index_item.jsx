import React from "react";
import StarRatingComponent from "react-star-rating-component";

const HotelIndexItem = ({
  hotel,
  createStars,
  checkBreakfast,
  internetCheck,
  price,
  address,
  rating,
  description
}) => {
  return (
    <div className="individual-selection">
      <div className="hotel-stats-container">
        <div className="hotel-name-price-container">
          <span className="hotel-name">{hotel}</span>
          <span className="hotel-price">${Math.round(price)} / night</span>
        </div>
        <div className="hotel-results-text-container">
          <div className="hotel-address-container">
            <div className="hotel-address">{address}</div>
            {/* <img className="hotel-icon" src="https://www.bingleywalkersarewelcome.org.uk/wp-content/uploads/2015/06/icon-hotel.png" /> */}
          </div>
          <div className="stars-rating-container">
            <div className="stars-rating">
              <StarRatingComponent
                name="rate1"
                starCount={5}
                value={createStars(rating)}
              />
            </div>
          </div>
          {/* <div className="hotel-amenities-container">
            {internetCheck(null) === true ? (<div className="internet-icon">
              Free Wi-Fi
                  <img src="https://cdn0.iconfinder.com/data/icons/travel-and-leisure/512/16-512.png"
                className="free-wifi" />
            </div>) : ""}
            <div className="breakfast-container">{checkBreakfast}</div>
          </div> */}

          <div className="marketing-text">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default HotelIndexItem;
