import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo2.png";
import { FaSearch } from "react-icons/fa";

function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navRef = useRef(null);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleOutsideClick = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsNavOpen(false);
    }
  };

  useEffect(() => {
    if (isNavOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isNavOpen]);

  return (
    <nav
      ref={navRef}
      className="navbar navbar-expand-lg navbar-dark fixed-top"
      style={{ backgroundColor: "rgba(0, 0, 126, 1)" }}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Logo" height={10} className="navbar-logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
          onClick={toggleNav}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`} id="navbarSupportedContent">
          <ul className="mx-auto mb-2 navbar-nav mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link text-light">
                Home
              </Link>
            </li>
            <li className="ms-2 nav-item dropdown">
              <Link to="#" className="nav-link dropdown-toggle text-light" role="button" data-bs-toggle="dropdown">
                Get in Touch
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/AboutUs" className="dropdown-item">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contactUs" className="dropdown-item">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/Events" className="dropdown-item">
                    Events
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item ms-2">
              <Link to="/packages" className="nav-link text-light">
                Packages
              </Link>
            </li>
            <li className="nav-item dropdown ms-2">
              <Link to="#" className="nav-link dropdown-toggle text-light" role="button" data-bs-toggle="dropdown">
                Destination
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/destination/1" className="dropdown-item">
                    Study Destinations
                  </Link>
                </li>
                <li>
                  <Link to="/destination/2" className="dropdown-item">
                    Vacation Destinations
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item ms-2">
              <Link to="/blog" className="nav-link text-light">
                Blog
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <button className="btn btn-link text-light me-3" onClick={toggleSearch}>
              <FaSearch />
            </button>
            {isSearchOpen && (
              <input
                type="text"
                className=" form-control ms-2"
                placeholder="Search..."
                style={{ width: "200px", marginRight: "8px" }}
              />
            )}
            <Link to="/Login" className="btn btn-outline-light">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
