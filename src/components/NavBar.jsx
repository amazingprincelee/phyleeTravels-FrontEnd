import React, { useContext, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { AuthContext } from "./AuthContext";
import logo from "../images/logo.png";

function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { isLoggedIn, logout } = useContext(AuthContext);
  const dropdownRef = useRef(null);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLinkClick = () => {
    setIsNavOpen(false); // Close the menu when a link is clicked
  };

  const handleLogout = async () => {
    await logout();
    setIsNavOpen(false); // Close the menu after logout
  };

  const handleDropdownClick = (e) => {
    e.preventDefault();
    setIsNavOpen(!isNavOpen);
  };

  // Close dropdown when clicking outside
  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsNavOpen(false);
    }
  };

  // Add event listener for clicking outside
  React.useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-bg-purple text-light" style={{ backgroundColor: "#00007e" }}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Logo" className="navbar-logo" width={250} height={50} />
        </Link>
        <button className="navbar-toggler" type="button" onClick={toggleNav}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
            {!isLoggedIn && (
              <>
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
              </>
            )}
          </ul>
          <div className="ms-auto">
            <ul className="navbar-nav">
              {isLoggedIn ? (
                <li className="nav-item dropdown" ref={dropdownRef}>
                  <a className="nav-link dropdown-toggle text-light" href="#" role="button" onClick={handleDropdownClick}>
                    <FaUserCircle style={{ fontSize: "24px" }} />
                  </a>
                  <ul className={`dropdown-menu dropdown-menu-end ${isNavOpen ? "show" : ""}`}>
                    <li><Link to="/Profile" className="dropdown-item" onClick={handleLinkClick}>Profile</Link></li>
                    <li><Link to="/Settings" className="dropdown-item" onClick={handleLinkClick}>Settings</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link to="/Logout" className="dropdown-item" onClick={handleLogout}>Logout</Link></li>
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
