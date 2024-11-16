import React, { useState } from "react";
import { Button } from "react-bootstrap";
import client1 from "../images/testimonials/client1.png";
import client2 from "../images/testimonials/client2.png";
import client3 from "../images/testimonials/client3.png";
import stars from "../images/testimonials/5Stars.png";

// Sample data (replace with your images and descriptions)
const carouselItems = [
  {
    image: client1,
    name: "Sara Grace",
    title: "Student",
    description:
      "Phylee Travel and Tours efficiently facilitated my admission and assisted me in securing a student loan in the UK!.",
  },
  {
    image: client2,
    name: "David Osime",
    title: "traveller",
    description:
      "Phylee Travel and Tours exceeded my expectations with their impeccable service and attention to detail. From booking flights to arranging accommodations.",
  },
  {
    image: client3,
    name: "John Samuel",
    title: "Tourist",
    description:
      "Phylee Travel and Tours exceeded my expectations with their impeccable service and attention to detail. From booking flights to arranging accommodations.",
  },
];

function Testinomials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Go to the previous set of slides
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 3 : prevIndex - 1
    );
  };

  // Go to the next set of slides
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - 3 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="testimonials-carousel-container">
      <div className="container">
        <p
          className="text-secondary"
          style={{ fontSize: "1.5rem", marginBottom: 0 }}
        >
          TESTIMONIAL
        </p>
        <h2 className="mt-0">What Our clients says</h2>
        <p className="testimonial-subtitle">
          Get personalized support and resources for a smooth admission
          process—start your journey with us today!
        </p>
      </div>
      <div className="mb-5">
        <div className="container mb-3 d-flex justify-content-end" >
          <Button
            variant="light"
            className="shadow carousel-control prev me-5" 
            onClick={handlePrev}
          >
            &lt;
          </Button>

          <Button
            variant="light"
            className="shadow carousel-control next"
            onClick={handleNext}
          >
            &gt;
          </Button>
        </div>
      </div>

      <div className="carousel-wrapper testimonials-carousel-wrapper">
        <div className="carousel-cards">
          {carouselItems
            .slice(currentIndex, currentIndex + 3)
            .map((item, index) => (
              <div
                key={index}
                className="carousel-card testimonials-carousel-card"
                style={{ width: 250 }}
              >
                <img
                  src={item.image}
                  alt={`Slide ${index + 1}`}
                  width={80}
                  height={80}
                />
                
                <h2>{item.name}</h2>
                <p>{item.title}</p>
                <img src={stars} alt="stars" width={80} />
                <p className="testimonials-description">{item.description}</p>
                
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Testinomials;
