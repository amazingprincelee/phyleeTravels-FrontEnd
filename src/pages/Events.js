import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import eventPhoto from '../images/fair-event.jpeg'

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://phyleetravels-backend.onrender.com/api/events/all_events')
      .then(response => response.json())
      .then(data => {
        setEvents(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
        setLoading(false);
      });
  }, []);

  const handleRegister = (event) => {
    navigate.push({
      pathname: '/RegisterEvent',
      state: { event }
    });
  };

  return (
    <div className="p-0 container-fluid">
      <header className="hero-section">
        <div className="container py-5 text-center">
          <h1 className="text-white display-4">Events</h1>
          <p className="text-white lead">Explore upcoming events and register to join us for an amazing experience.</p>
        </div>
      </header>

      <div className="container">
        {loading ? (
          <div className="mb-5 d-flex justify-content-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="row">
            {events.map(event => (
              <div className="mb-4 col-md-4" key={event._id}>
                <div className="card">
                  <img src={eventPhoto} className="card-img-top" alt={event.eventName} />
                  <div className="card-body">
                    <h5 className="card-title">{event.eventName}</h5>
                    <p className="card-text">Location: {event.location}</p>
                    <p className="card-text">Date: {new Date(event.date).toLocaleDateString()}</p>
                    <p className="card-text">Time: {event.time}</p>
                    <button className="custom-btn text-light" onClick={() => handleRegister(event)}>Register</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Events;
