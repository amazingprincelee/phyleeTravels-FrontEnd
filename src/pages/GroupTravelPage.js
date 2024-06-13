import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const GroupTravelPage = () => {
  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://via.placeholder.com/600x400"
            className="img-fluid rounded"
            alt="Group Travel"
          />
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <div>
            <h1 className="mb-4">Unforgettable Group Travel Experiences</h1>
            <p className="lead">
              Planning a group trip can be daunting, but at Phylee Journeys, we make it easy and enjoyable. Whether you're organizing a family reunion, corporate retreat, or a trip with friends, our expert team is here to create seamless and memorable group travel experiences.
            </p>
            <h2 className="mt-5">Why Choose Phylee Journeys for Group Travel?</h2>
            <ul className="list-unstyled">
              <li>
                <strong>Tailored Itineraries:</strong> Customizable travel plans to suit your group's interests and needs.
              </li>
              <li>
                <strong>Exclusive Group Discounts:</strong> Benefit from special rates and deals for group bookings.
              </li>
              <li>
                <strong>Comprehensive Coordination:</strong> We handle all logistics, from transportation to accommodations and activities, ensuring a hassle-free experience.
              </li>
            </ul>
            <p className="mt-4">
              Let us take the stress out of planning your next group adventure. Connect with us today to start crafting a journey that everyone will cherish!
            </p>
            <button className="btn btn-primary mt-3">Contact Us</button>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col text-center">
          <p className="lead">
            Unlock new adventures and create lifelong memories with your group. Contact us today and let's plan your next group travel experience!
          </p>
        </div>
      </div>
    </div>
  );
};

export default GroupTravelPage;
