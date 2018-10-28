import React from 'react';
import MainHeaderAuth from './main_header_auth_container.jsx';
import { Link } from "react-router-dom";

// import mainHeaderCss from '../../../stylesheets/main-header-auth.scss'
const headerMain = () => (
  <div className="main-header-container">
    <img
      className="home-icon"
      src="https://mbtskoudsalg.com/images/travel-png-images-7.png"
    />
    <div className="main-header-menu-wrap">
      <div className="main-header-menu-left">
        {/* <div className="menu-text-1">
          <button>Write a Review</button>
        </div>
        <div className="menu-text-2">
          <button>Events</button>
        </div>
        <div className="menu-text-3">
          <button>Talk</button>
        </div> */}
        <Link to="/" className="logo-link">
          Simply Travel
        </Link>
      </div>
      <div>
        <MainHeaderAuth />
      </div>
    </div>
  </div>
);

export default headerMain;
