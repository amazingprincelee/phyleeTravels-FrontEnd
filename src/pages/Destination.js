import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import images for countries
import destinationPhoto from '../images/destinationphoto.jpeg';


const countries = [
  { name: 'Australia', imgSrc: destinationPhoto, description: 'Study in Australia.' },
  { name: 'Canada', imgSrc: destinationPhoto, description: 'Study in Canada.' },
  { name: 'United Kingdom', imgSrc: destinationPhoto, description: 'Study in the UK.' },
  { name: 'United States', imgSrc: destinationPhoto, description: 'Study in the USA.' },
  { name: 'New Zealand', imgSrc: destinationPhoto, description: 'Study in New Zealand.' },
  { name: 'Ireland', imgSrc: destinationPhoto, description: 'Study in Ireland.' }
];

function Destination() {
  return (
    <div className="container-fluid p-0">
      <header className="hero-section">
        <div className="container py-5 text-center">
          <h1 className="display-4 text-white">Study Abroad Destinations</h1>
          <p className="lead text-white">Explore top study destinations around the world and plan your international education journey with Phylee.</p>
        </div>
      </header>

      <div className="container">
        <div className="row">
          {countries.map((country, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100">
                <img src={country.imgSrc} className="card-img-top" alt={country.name} />
                <div className="card-body">
                  <h5 className="card-title">{country.name}</h5>
                  <p className="card-text">{country.description}</p>
                  <button className="custom-btn">Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Destination;
