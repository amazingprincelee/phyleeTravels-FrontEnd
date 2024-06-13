import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import axios from "axios";
import logo from '../images/logo.png';

function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkAuthentication();
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLinkClick = () => {
    setIsNavOpen(false); // Close the menu when a link is clicked
  };

  const checkAuthentication = async () => {
    try {
      const response = await axios.get("https://quiet-ravine-44147-35b8bde85fde.herokuapp.com/api/auth/check-auth");
      setIsLoggedIn(response.data.loggedIn);
    } catch (error) {
      console.error("Error checking authentication:", error);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-bg-purple text-light" style={{ backgroundColor: '#00007e' }}>
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNav}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${isNavOpen ? "show" : ""} collapse navbar-collapse`}
          id="navbarSupportedContent"
        >
          <Link to="/" onClick={handleLinkClick}>
            <img src={logo} alt="Logo" width={200} height={50} />
          </Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link active text-light"
                aria-current="page"
                style={{ fontSize: "16px", margin: "10px" }}
                onClick={handleLinkClick}
              >
                Study Abroad
              </Link>
            </li>
            
            <li className="nav-item">
              <Link
                to="/AboutUs"
                className="nav-link text-light"
                style={{ fontSize: "16px", margin: "10px" }}
                onClick={handleLinkClick}
              >
                What we do
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Destination"
                className="nav-link text-light"
                style={{ fontSize: "16px", margin: "10px" }}
                onClick={handleLinkClick}
              >
                Destination
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/findAcourse"
                className="nav-link text-light"
                style={{ fontSize: "16px", margin: "10px" }}
                onClick={handleLinkClick}
              >
                Find a course
              </Link>
            </li>
          </ul>
          <div className="ml-auto">
            <ul className="navbar-nav">
              {isLoggedIn ? (
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <FaUserCircle style={{ fontSize: "24px" }} />
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link to="/Profile" className="dropdown-item" onClick={handleLinkClick}>Profile</Link></li>
                    <li><Link to="/Settings" className="dropdown-item" onClick={handleLinkClick}>Settings</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link to="/Logout" className="dropdown-item" onClick={handleLinkClick}>Logout</Link></li>
                  </ul>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <Link
                      to="/Events"
                      className="nav-link text-light nav-link-hover"
                      style={{ fontSize: "16px", margin: "10px" }}
                      onClick={handleLinkClick}
                    >
                      <FaCalendarAlt style={{ marginRight: "5px" }} /> Events
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="/FindUs"
                      className="nav-link text-light nav-link-hover"
                      style={{ fontSize: "16px", margin: "10px" }}
                      onClick={handleLinkClick}
                    >
                      <FaMapMarkerAlt style={{ marginRight: "5px" }} /> Find us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/Registration"
                      className="nav-link text-light nav-link-hover"
                      style={{ fontSize: "16px", margin: "10px" }}
                      onClick={handleLinkClick}
                    >
                      Sign up
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
