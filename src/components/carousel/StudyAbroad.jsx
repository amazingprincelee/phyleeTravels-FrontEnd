import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import slide1 from "../../images/unitedkingdom-flag.png";
import slide2 from "../../images/canadian-flag.png";
import slide3 from "../../images/australia-flag.png";

// Sample data (replace with your images and descriptions)
const carouselItems = [
  {
    image: slide1,
    title: "United Kingdom",
    description: "We will help you apply and get admission in any school of your choice in the United Kingdom.",
    link: "/study-abroad/united-kingdom"
  },
  {
    image: slide2,
    title: "Canada",
    description: "We will help and assist you apply and gain admission to any school of your choice in Canada.",
    link: "/study-abroad/canada"
  },
  {
    image: slide3,
    title: "Australia",
    description: "We will help you apply and secure admission to any school of your choice in Australia.",
    link: "/study-abroad/australia"
  },
];

function ExploreCarouselComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Go to the previous set of slides
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1));
  };

  // Go to the next set of slides
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="studyabroad-background-container">
      <div className="study-carousel-container">
      <div className="container text-center d-flex flex-column align-items-center">
  <h2 className="carousel-title studyabroad-carousel-title text-wrap text-md-nowrap w-100 w-md-50">
    Study Abroad
  </h2>
  <p className="px-3 studyabroad-subtitle px-md-0">
    Get personalized support and resources for a smooth admission process—start your journey with us today!
  </p>
</div>

        <div className="d-flex justify-content-center align-items-center">
          <div className="mb-3 justify-content-between d-flex" style={{ width: '90%' }}>
            <Button variant="light" className="shadow carousel-control prev" onClick={handlePrev}>
              &lt;
            </Button>

            <Button variant="light" className="shadow carousel-control next" onClick={handleNext}>
              &gt;
            </Button>
          </div>
        </div>

        <div className="carousel-wrapper study-carousel-wrapper">
          <div className="carousel-cards">
            {carouselItems
              .slice(currentIndex, currentIndex + 1)  // Show one item at a time
              .map((item, index) => (
                <div key={index} className="carousel-card studyabroad-carousel-card" style={{ width: 250 }}>
                  <img
                    src={item.image}
                    alt={`Slide ${index + 1}`}
                    className=""
                    width={123}
                    height={123}
                  />

                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <div className="mt-5">
                    <a href={item.link} className="learn-more-link">
                      Learn More <FaArrowRight />
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreCarouselComponent;
