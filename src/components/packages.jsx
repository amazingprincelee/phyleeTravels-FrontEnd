import React from "react";
import { BsArrowRight } from "react-icons/bs";
import ukImage from "../images/packages/uk.png";
import canadaImage from "../images/packages/canada.png";
import newzealandImage from "../images/packages/newzealand.png";
import dubaiImage from "../images/packages/dubai.png";
import schengenImage from "../images/packages/schengen.png";
import singaporeImage from "../images/packages/singapore.png";

const destinations = {
  study: [
    {
      id: 1,
      name: "UK",
      price: "₦100k/week",
      desc: "Experience world-class education in the UK, home to prestigious universities and a rich cultural heritage.",
      img: ukImage,
      stars: 5,
    },
    {
      id: 2,
      name: "Canada",
      price: "₦150k/2 weeks",
      desc: "Study in Canada and enjoy a high-quality education with diverse opportunities in a welcoming environment.",
      img: canadaImage,
      stars: 5,
    },
    {
      id: 3,
      name: "New Zealand",
      price: "₦100k/week",
      desc: "Discover innovative education in New Zealand, known for its beautiful landscapes and supportive study environment.",
      img: newzealandImage,
      stars: 5,
    },
  ],
  travel: [
    {
      id: 1,
      name: "Dubai",
      price: "₦299k/3 days",
      desc: "Discover the dazzling city of Dubai, where luxury meets adventure. From stunning skyscrapers to desert safaris.",
      img: dubaiImage,
      stars: 5,
    },
    {
      id: 2,
      name: "Schengen Visa",
      price: "₦300k/3 days",
      desc: "The Schengen Visa allows travel across 27 European countries within the Schengen Area, which includes popular destinations like France, Germany, and Italy.",
      img: schengenImage,
      stars: 5,
    },
    {
      id: 3,
      name: "Singapore",
      price: "₦299k/3 days",
      desc: "Explore the vibrant city of Singapore, a perfect blend of tradition and modernity. Enjoy world-class attractions, lush gardens, and rich culinary experiences.",
      img: singaporeImage,
      stars: 5,
    },
  ],
};

const DestinationCard = ({ img, name, price, desc, stars, buttonText }) => (
  <div className="mb-4 col-md-4">
    <div className="shadow-sm card h-100">
      <img src={img} alt={name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text fw-bold">{price}</p>
        <p className="card-text">{desc}</p>
        <div>
          {"★".repeat(stars)}{" "}
          <span style={{ color: "#ccc" }}>{"★".repeat(5 - stars)}</span>
        </div>
        <button className="mt-3 btn btn-dark w-100">{buttonText}</button>
      </div>
    </div>
  </div>
);

const PackagesComponent = () => {
  return (
    <div className="container my-5">
      {/* Study Destinations */}
      <div className="mb-5">
        <h2 className="fw-bold">Popular Study Destination</h2>
        <p>
          As registered admission agents for top schools in popular study destinations, we streamline the application
          process to secure your admission quickly and efficiently.
        </p>
        <button className="mb-4 btn btn-outline-dark">
          Discover more <BsArrowRight />
        </button>
        <div className="row">
          {destinations.study.map((dest) => (
            <DestinationCard
              key={dest.id}
              img={dest.img}
              name={dest.name}
              price={dest.price}
              desc={dest.desc}
              stars={dest.stars}
              buttonText="Apply Now"
            />
          ))}
        </div>
      </div>

      {/* Travel Destinations */}
      <div>
        <h2 className="fw-bold">Popular Travel Destination</h2>
        <p>Discover top destinations around the world for unforgettable tours and vacations tailored to your desires.</p>
        <button className="mb-4 btn btn-outline-dark">
          Discover more <BsArrowRight />
        </button>
        <div className="row">
          {destinations.travel.map((dest) => (
            <DestinationCard
              key={dest.id}
              img={dest.img}
              name={dest.name}
              price={dest.price}
              desc={dest.desc}
              stars={dest.stars}
              buttonText="Booking Now"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackagesComponent;
