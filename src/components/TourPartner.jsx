import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import katanaLogo from "../images/partners/Katana.png"; 
import travavaLogo from "../images/partners/travava.png"; 
import biguiLogo from "../images/partners/bigui.png"; 
import bookingLogo from "../images/partners/Booking.com.png"; 
import jakmaenLogo from "../images/partners/Jakmaen.png"; 

function TourPartners() {
  return (
    <Container className="my-5 text-center">
      <h2 className="fw-bold">Our tour partner</h2>
      <p className="text-muted">
        We partner with trusted organizations to bring you top-quality travel
        and <br /> educational services worldwide.
      </p>
      <Row className="mt-4 justify-content-center">
        <Col xs={6} sm={4} md={2}>
          <img src={katanaLogo} alt="Katana" className="img-fluid" width={80}/>
        </Col>
        <Col xs={6} sm={4} md={2}>
          <img src={travavaLogo} alt="Travava" className="img-fluid" width={80} />
        </Col>
        <Col xs={6} sm={4} md={2}>
          <img src={biguiLogo} alt="Bigui" className="img-fluid" width={80} />
        </Col>
        <Col xs={6} sm={4} md={2}>
          <img src={bookingLogo} alt="Booking.com" className="img-fluid" width={80} />
        </Col>
        <Col xs={6} sm={4} md={2}>
          <img src={jakmaenLogo} alt="Jakmaen" className="img-fluid" width={80} />
        </Col>
      </Row>
    </Container>
  );
}

export default TourPartners;
