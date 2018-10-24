import React from 'react';
import { Link } from 'react-router-dom';

const mainHeaderAuth = ({currentUser, logout}) => {
  const needLog =()=> (
  <div className="menu-right">
    <div className="about-us-header-div">
      <Link to="/about" className="link-blank"><button>About us</button></Link>
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
  const logged = () => (
  <div className="menu-right">
    <div className="main-header-divider"></div>
    <div className="comment-header-div">
      <button onClick={logout} className="link-blank"><i className="fas fa-comment-alt"></i></button>
    </div>
    <div className="sign-up-header-div">
      <Link to="/signup" className="link-blank"><button onClick={logout} >Log out</button></Link>
    </div>
  </div>
  );

  return currentUser ? logged() : needLog();
};

export default mainHeaderAuth;