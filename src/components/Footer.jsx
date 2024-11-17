import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <footer className="mt-5 bg-light d-flex flex-column" style={{ minHeight: '300px' }}>
      <Container className="p-5 flex-grow-1">
        <Row>
          <Col md={3}>
            <div className="footer-image">
              <img
                src={logo}
                alt="Phylee Travel & Tours"
                style={{ maxWidth: '150px', marginBottom: '10px' }}
              />
            </div>
            <p className="footer-text">
              We specialize in providing top-notch traveling opportunities and services, catering to a diverse range of needs.
            </p>
          </Col>
          <Col md={3}>
            <h5>Contact Information</h5>
            <p>Nkpolu-Oroworukwo. PH</p>
            <p>+234 703 152 2572</p>
            <p>info@phyleetravels.com</p>
          </Col>
          <Col md={2}>
            <h5>Services</h5>
            <ul className="list-unstyled">
              <li>Student Loan</li>
              <li>Book flight</li>
              <li>Study Abroad</li>
              <li>Consultation</li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>About Us</li>
              <li>Tours</li>
              <li>Events</li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Follow Us</h5>
            <div className="">
              <a href="/#" className=" text-dark">
                <FaFacebookF />
              </a>
              <a href="/#" className="mx-2 text-dark">
                <FaInstagram />
              </a>
              <a href="/#" className="mx-2 text-dark">
                <FaTwitter />
              </a>
              <a href="/#" className="mx-2 text-dark">
                <FaYoutube />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="p-3 mt-auto bg-black copyright-container d-flex justify-content-center align-items-center">
  <p className="m-0 text-center text-white" style={{ fontSize: '12px' }}>
    Copyright &copy; 2024. All rights reserved (Website Developed: CollaboGig Innovation)
  </p>
</div>

    </footer>
  );
};

export default Footer;
