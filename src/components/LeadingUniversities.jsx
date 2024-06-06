import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import bradfordImage from '../images/bradford.png';
import kentImage from '../images/kent.png';
import hertfordshireImage from '../images/hertfordshire.png';

const universities = [
  {
    name: 'Bradford University',
    description: 'Known for its strong focus on employability and its pioneering research in advanced healthcare, innovative engineering, and sustainable societies.',
    link: '/#',
    image: bradfordImage,
  },
  {
    name: 'University of Kent',
    description: 'Renowned for its research in arts, humanities, sciences, and social sciences with beautiful campuses. and beautiful environment',
    link: '/#',
    image: kentImage,
  },
  {
    name: 'University of Hertfordshire',
    description: 'Offering excellent undergraduate and postgraduate programs with modern facilities and strong industry links.',
    link: '/#',
    image: hertfordshireImage,
  },
  // Add more universities as needed
];

const StudyAtLeadingUniversities = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Study at Leading Universities</h2>
      <div className="row">
        {universities.map((uni, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100">
              <img 
                src={uni.image} 
                className="card-img-top" 
                alt={uni.name}
                style={{ height: '200px', objectFit: 'cover' }} 
              />
              <div className="card-body">
                <h5 className="card-title">{uni.name}</h5>
                <p className="card-text">{uni.description}</p>
                <a href={uni.link} ><button className=" custom-btn">Learn More</button></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyAtLeadingUniversities;
