import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import hopeDickson from "../../images/hope-dickson.png";

function FounderSection() {
  return (
    <div className="container py-5">
      <div
        className="row align-items-center g-5"
        style={{
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {/* Left Section - Image */}
        <div className="text-center col-12 col-md-6">
          <img
            src={hopeDickson}
            alt="Founder"
            className="rounded img-fluid"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>

        {/* Right Section - Text */}
        <div className="col-12 col-md-6">
          {/* Quote Icon */}
          <FaQuoteLeft
            size={40}
            className="mb-3"
            style={{ color: "black" }}
          />

          {/* Quote Text */}
          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#333" }}>
            At Pryhze Travel & Tours, we believe that travel should be enriching
            and effortless. Our mission is to create journeys that inspire,
            connecting people to the world in meaningful ways.
          </p>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              color: "#333",
              marginTop: "15px",
            }}
          >
            We're passionate about handling every detail, so our clients can
            focus on enjoying each moment. Thank you for trusting us to be part
            of your adventure.
          </p>

          {/* Name and Title */}
          <div className="mt-4">
            <h3 style={{ margin: 0, fontSize: "22px", color: "#000" }}>
              Hope Dickson
            </h3>
            <p style={{ margin: 0, fontSize: "16px", color: "#555" }}>
              Founder, Pryhze Travel & Tours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FounderSection;
