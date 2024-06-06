import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo.jpg'


function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLinkClick = () => {
    setIsNavOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-bg-purple text-light" style={{ backgroundColor: '#232c57' }}>
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
         <img src={logo} />
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
           
            <li className="nav-item">
            
              <Link
                to="/"
                className="nav-link active text-light"
                aria-current="page"
                style={{ fontSize: "16px", margin: "10px" }}
                onClick={handleLinkClick} // Update the onClick event handler
              >
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/aboutus"
                className="nav-link text-light"
                style={{ fontSize: "16px", margin: "10px" }}
                onClick={handleLinkClick} 
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-link text-light"
                style={{ fontSize: "16px", margin: "10px" }}
                onClick={handleLinkClick} 
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/supportedliving"
                className="nav-link text-light"
                style={{ fontSize: "16px", margin: "10px" }}
                onClick={handleLinkClick} 
              >
                Supported Liviing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/cqc"
                className="nav-link text-light"
                style={{ fontSize: "16px", margin: "10px" }}
                onClick={handleLinkClick} 
              >
                CQC
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/register"
                className="nav-link text-light"
                style={{ fontSize: "16px", margin: "10px" }}
                onClick={handleLinkClick} 
              >
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contactus"
                className="nav-link text-light"
                style={{ fontSize: "16px", margin: "10px" }}
                onClick={handleLinkClick} 
              >
                Contact Us
              </Link>
            </li>

           
            
          </ul>
          <a href="https://medium.com/@KARMAERC/chapter-1-the-wicked-and-the-damned-183133bbd4bc" className="social-link"></a>
          <a href="https://t.me/karma_erc20" className="social-link"></a>
          <a href="https://twitter.com/Karma_Erc20" className="social-link"></a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;