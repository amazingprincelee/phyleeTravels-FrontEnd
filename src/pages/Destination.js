import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const countries = [
  { name: 'Australia', imgSrc: 'https://via.placeholder.com/150', description: 'Study in Australia.' },
  { name: 'Canada', imgSrc: 'https://via.placeholder.com/150', description: 'Study in Canada.' },
  { name: 'United Kingdom', imgSrc: 'https://via.placeholder.com/150', description: 'Study in the UK.' },
  { name: 'United States', imgSrc: 'https://via.placeholder.com/150', description: 'Study in the USA.' },
  { name: 'New Zealand', imgSrc: 'https://via.placeholder.com/150', description: 'Study in New Zealand.' },
  { name: 'Ireland', imgSrc: 'https://via.placeholder.com/150', description: 'Study in Ireland.' }
];

function Destination() {
  return (
    <div className="container mt-5">
      <header className="text-center mb-5">
        <h1>Study Abroad Destinations</h1>
        <p>Explore top study destinations around the world and plan your international education journey with Phylee.</p>
      </header>

      <div className="row">
        {countries.map((country, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <img src={country.imgSrc} className="card-img-top" alt={country.name} />
              <div className="card-body">
                <h5 className="card-title">{country.name}</h5>
                <p className="card-text">{country.description}</p>
                <a href="/#" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destination;
