import React from 'react';
import { Link } from 'react-router-dom';
const mainHeaderAuth = ({currentUser, logoutUser}) => {
  const needLogIn =()=> (
  <div className="menu-right">
    <div className="about-us-header-div">
      <Link to="/about" className="link-blank"><button>About us</button></Link>
    </div>
      <div className="not-logged-in-header-div">
      <Link to="/map" className="link-blank2">
        <button><img className='world-logo' src="http://kabramkrafts.com/wp-content/uploads/2017/04/earth.svg"></img></button></Link>
    </div>
    <div className="main-header-divider"></div>
    <div className="log-in-header-div">
      <Link to="/login" className="link-blank"><button>Log In</button></Link>
    </div>
    <div className="sign-up-header-div">
      <Link to="/signup" className="link-blank"><button>Sign Up</button></Link>
    </div>
  </div>
  );
  const loggedIn = () => (
  <div className="menu-right">
      <div className="about-us-header-div">
        <Link to="/about" className="link-blank"><button>About us</button></Link>
      </div>
    <div className="main-header-divider"></div>
    <div className="log-in-header-div2">
      <Link to="/map" className="link-blank2">
          <button><img className='world-logo' src="http://kabramkrafts.com/wp-content/uploads/2017/04/earth.svg"></img></button></Link>
    </div>
    <div className="sign-up-header-div">
    
      <Link to="/" className="link-blank"><button onClick={logoutUser} >Log out</button></Link>
    </div>
  </div>
  );

  return currentUser ? loggedIn() : needLogIn();
};

export default mainHeaderAuth;