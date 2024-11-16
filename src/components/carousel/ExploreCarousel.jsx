import React, { useState } from "react";
import { Button } from "react-bootstrap";
import slide1 from "../../images/explore-slide1.png";
import slide2 from "../../images/explore-slide2.png";
import slide3 from "../../images/explore-slide3.png";
import slide4 from "../../images/explore-slide4.png";
import slide5 from "../../images/explore-slide5.png";


// Sample data (replace with your images and descriptions)
const carouselItems = [
  {
    image: slide1,
    title: "United Arab Emirates",
    description:
      "Known for its modern skyscrapers, luxury shopping, and vibrant nightlife.",
  },
  {
    image: slide2,
    title: "Bali, Indonesia.",
    description:
      "Kyoto, Japan. Known for its classical Buddhist temples, as well as gardens, imperial palaces, and more.",
  },
  {
    image: slide3,
    title: "United Kingdom",
    description:
      "Famous for historic castles, scenic countryside, and cultural landmarks..",
  },
  {
    image: slide4,
    title: "Australia",
    description:
      "Renowned for stunning beaches, unique wildlife, and diverse landscapes.",
  },
  {
    image: slide5,
    title: "United States",
    description:
      "New York City, USA. The Statue of Liberty, Central Park, and skyscrapers make it a popular destination.",
  },
];

function ExploreCarouselComponent() {
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
    <div className="carousel-container">
      <div className="text-center d-flex flex-column align-items-center">
        <h2 className="w-50 carousel-title">
          Explore new worlds with exotic natural scenery
        </h2>
        <p className="carousel-subtitle">
          Explore the world with what you love beautiful natural beauty.
        </p>
        
      </div>
      <div className="d-flex justify-content-center align-items-center">
      <div className="mb-3 justify-content-between d-flex" style={{ width:'100%'}}>
          <Button
            variant="light"
            className="shadow carousel-control prev" // Margin-end for spacing
            onClick={handlePrev}
          >
            &lt;
          </Button>

          <Button
            variant="light"
            className="shadow carousel-control next " // Margin-start for spacing
            onClick={handleNext}
          >
            &gt;
          </Button>
        </div>
        </div>

      <div className="carousel-wrapper">
        <div className="carousel-cards">
          {carouselItems
            .slice(currentIndex, currentIndex + 3)
            .map((item, index) => (
              <div key={index} className="carousel-card">
                <img
                  src={item.image}
                  alt={`Slide ${index + 1}`}
                  className="carousel-image"
                />
                <div className="carousel-caption-card">
                    <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ExploreCarouselComponent;
