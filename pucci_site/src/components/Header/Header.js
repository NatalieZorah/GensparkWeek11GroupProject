import React, { useState } from 'react'
import { IoMdHeartEmpty } from "react-icons/io";
import { BsBag } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import Bag from '../Bag/Bag'
import "./Header.css";
import BagHover from '../Bag/BagHover';
import { useNavigate, NavLink } from 'react-router-dom';

const Navigation = props => {
  const [isHover, setIsHover] = useState(false)
  const handleMouseOver = () => {
    setIsHover(true)
  }
  const handleMouseOut = () => {
    setIsHover(false)
  }
  const handleBagClick = (e) => {
    e.preventDefault()
    navigate("/bag")
  }
  const navigate = useNavigate()
  return (
    <div className="navigation">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12">
            <h1 className="title pucci-logo">P U C C I </h1>
            <div className="nav-user-btn-container">

              {/* If a user is logged in and is type admin*/}
              {/* {props.currentUser && props.currentUser.sign_in_type === "admin" ? (<button className="nav-login-btn">Admin Settings</button>): ""} */}
              <button className="nav-login-btn" onClick={props.onAdminClick}>Admin Settings</button>

              {/* If a user is logged in */}
              {props.currentUser ? (
                <button className='nav-login-btn' onClick={props.Logout}>
                  Logout
                </button>
              ) : (
                <>
                  <button
                    className="nav-login-btn"
                    onClick={props.onLoginClick}
                  >
                    Sign in
                  </button>
                  <button
                    className="nav-register-btn"
                    onClick={props.onRegisterClick}
                  >
                    Register
                  </button>
                </>
              )}

              <button className='nav-favorites-btn'><IoMdHeartEmpty className="nav-favorites-btn-icon" /></button>
              <button className='nav-bag-btn' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleBagClick} href="/cart"><BsBag className="nav-bag-btn-icon" />Bag</button>
              <button className='nav-search-btn'><BiSearch className="nav-search-btn-icon" /></button>
              {isHover &&
                <BagHover />}
            </div>
            <nav>
              <ul className="nav nav-tabs">
                {/* for the moment all links point to not found so that they arent all highlighted as active, as the pages are added
                they can just be changed to the proper link as noted in the comment above each link */}

                <li className="nav-tabs-header">
                  {/* /home */}
                  <NavLink className="nav-link" to="/home">
                    HOME
                  </NavLink>
                </li>
                <li className="nav-tabs-header">
                  {/* /adidogs */}
                  <NavLink className="nav-link" to="/adidogs">
                    ADIDOGS X PUCCI
                  </NavLink>
                </li>
                <li className="nav-tabs-header">
                  {/* /whats-new */}
                  <NavLink className="nav-link" to="/page-not-found">
                    WHAT'S NEW
                  </NavLink>
                </li>
                <li className="nav-tabs-header">
                  {/* /handbags */}
                  <NavLink className="nav-link" to="/page-not-found">
                    HANDBAGS
                  </NavLink>
                </li>
                <li className="nav-tabs-header">
                  {/* /dogos */}
                  <NavLink className="nav-link" to="/page-not-found">
                    DOGS
                  </NavLink>
                </li>
                <li className="nav-tabs-header">
                  {/* /kitties */}
                  <NavLink className="nav-link" to="/page-not-found">
                    CATS
                  </NavLink>
                </li>
                <li className="nav-tabs-header">
                  {/* /bling */}
                  <NavLink className="nav-link" to="/page-not-found">
                    JEWELRY AND WATCHES
                  </NavLink>
                </li>
                <li className="nav-tabs-header">
                  {/* /beauty */}
                  <NavLink className="nav-link" to="/page-not-found">
                    BEAUTY
                  </NavLink>
                </li>
                <li className="nav-tabs-header">
                  {/* /shoes */}
                  <NavLink className="nav-link" to="/page-not-found">
                    SHOES
                  </NavLink>
                </li>
                <li className="nav-tabs-header">
                  {/* /decor-&-lifestyle */}
                  <NavLink className="nav-link" to="/page-not-found">
                    DECOR & LIFESTYLE
                  </NavLink>
                </li>
                <li className="nav-tabs-header">
                  {/* /gifts */}
                  <NavLink className="nav-link" to="/page-not-found">
                    GIFTS
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = props => {



  const logout = (e) => {
    localStorage.removeItem("user");
    window.location.reload();
  }

  const bag = {

  }

  return (
    <div className="header-container">
      <Navigation
        onLoginClick={props.onLoginClick}
        onRegisterClick={props.onRegisterClick}
        onAdminClick={props.onAdminClick}
        currentUser={props.currentUser}
        logout={logout}
        onBagClick={props.onBagClick}
      />

    </div>
  );
};

export default Header;
