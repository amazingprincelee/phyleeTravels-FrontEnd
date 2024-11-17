import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo2.png";
import { FaSearch } from "react-icons/fa";

function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

 

  return (
    <nav className="navbar navbar-expand-sm navbar-dark fixed-top" style={{ backgroundColor: "rgba(0, 0, 126, 1)" }}>
      <div className="container-fluid" style={{ height: "50px" }}>
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Logo" width={105} height={50} />
        </Link>
        <button className="navbar-toggler" type="button" onClick={toggleNav}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`} id="navbarSupportedContent">
          <ul className="mx-auto mb-2 navbar-nav mt-lg-4">
            <li className="nav-item">
              <Link to="/" className="nav-link text-light" style={{ fontSize: "16px", margin: "10px" }}>
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle text-light"
                id="destinationDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ fontSize: "16px", margin: "10px" }}
              >
                Get in Touch
              </Link>
              <ul className="dropdown-menu" aria-labelledby="destinationDropdown">
                <li><Link to="/AboutUs" className="dropdown-item">About us</Link></li>
                <li><Link to="/contactUs" className="dropdown-item">Contact us</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link to="/packages" className="nav-link text-light" style={{ fontSize: "16px", margin: "10px" }}>
                Packages
              </Link>
            </li>
            
            <li className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle text-light"
                id="destinationDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ fontSize: "16px", margin: "10px" }}
              >
                Destination
              </Link>
              <ul className="dropdown-menu" aria-labelledby="destinationDropdown">
                <li><Link to="/destination/1" className="dropdown-item">Study Destinations</Link></li>
                <li><Link to="/destination/2" className="dropdown-item">Vacation Destinations</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link text-light" style={{ fontSize: "16px", margin: "10px" }}>
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Login" className="nav-link text-light" style={{ fontSize: "16px", margin: "10px" }}>
                Sign in
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <button className="btn btn-link text-light" onClick={toggleSearch}>
              <FaSearch />
            </button>
            {isSearchOpen && (
              <input
                type="text"
                className="form-control ms-2"
                placeholder="Search..."
                style={{ width: "200px" }}
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
