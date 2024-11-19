import React from "react";
import { Button } from "react-bootstrap";
import backgroundImage from "../images/fightbooking.png";

function FlightBookingBanner() {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="container text-white">
        <h1 className="mb-3 font-weight-bold" style={{ fontSize: "2.5rem" }}>
          Find the Perfect Flight for <br /> Your Next Adventure
        </h1>
        <Button variant="primary border border-light" size="lg">
          Book flight
        </Button>
      </div>
    </div>
  );
}

export default FlightBookingBanner;
