import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TravelPage = () => {
  return (
    <div className="container py-4">
      <div className="text-center">
        <h1>Explore the World, Expand Your Horizons</h1>
        <p className="lead">
          As an education expert, you know the transformative power of learning. At [Travel Agent Name], we specialize in creating bespoke travel experiences that blend education and adventure. Whether you're looking to attend international conferences, visit historical sites, or participate in cultural exchange programs, we tailor each journey to enrich your professional and personal growth.
        </p>
      </div>
      <div className="row my-4">
        <div className="col-md-4">
          <img src="https://via.placeholder.com/300x200" className="img-fluid mb-3" alt="Customized Itineraries" />
          <h2>Customized Itineraries</h2>
          <p>Personalized trips designed to align with your academic interests and career goals. We work closely with you to craft an itinerary that meets your specific needs.</p>
        </div>
        <div className="col-md-4">
          <img src="https://via.placeholder.com/300x200" className="img-fluid mb-3" alt="Expert Guidance" />
          <h2>Expert Guidance</h2>
          <p>Access to a network of global educators and industry leaders who provide insights and support throughout your journey.</p>
        </div>
        <div className="col-md-4">
          <img src="https://via.placeholder.com/300x200" className="img-fluid mb-3" alt="Seamless Planning" />
          <h2>Seamless Planning</h2>
          <p>From visas to accommodations, we handle all logistics so you can focus on the experience. Our team ensures every detail is taken care of.</p>
        </div>
        <div className="col-md-4">
          <img src="https://via.placeholder.com/300x200" className="img-fluid mb-3" alt="Cultural Exchange Programs" />
          <h2>Cultural Exchange Programs</h2>
          <p>Immerse yourself in different cultures and gain a deeper understanding of the world through our curated cultural exchange programs.</p>
        </div>
        <div className="col-md-4">
          <img src="https://via.placeholder.com/300x200" className="img-fluid mb-3" alt="Historical Sites Visits" />
          <h2>Historical Sites Visits</h2>
          <p>Explore ancient civilizations and historic landmarks with guided tours that bring history to life.</p>
        </div>
        <div className="col-md-4">
          <img src="https://via.placeholder.com/300x200" className="img-fluid mb-3" alt="International Conferences Attendance" />
          <h2>International Conferences Attendance</h2>
          <p>Participate in international conferences and seminars to expand your knowledge and network with experts in your field.</p>
        </div>
      </div>
      <div className="text-center">
        <p>Unlock new knowledge and perspectives with travel experiences that go beyond the classroom. Connect with us today and start your journey towards a world of learning!</p>
      </div>
    </div>
  );
};

export default TravelPage;
