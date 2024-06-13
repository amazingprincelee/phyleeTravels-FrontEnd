import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import eventPhoto from '../images/fair-event.jpeg'

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    fetch('https://phylee-75a6aa507dc5.herokuapp.com/api/events/all_events')
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
    history.push({
      pathname: '/RegisterEvent',
      state: { event }
    });
  };

  return (
    <div className="container-fluid p-0">
      <header className="hero-section">
        <div className="container py-5 text-center">
          <h1 className="display-4 text-white">Events</h1>
          <p className="lead text-white">Explore upcoming events and register to join us for an amazing experience.</p>
        </div>
      </header>

      <div className="container">
        {loading ? (
          <div className="d-flex justify-content-center mb-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="row">
            {events.map(event => (
              <div className="col-md-4 mb-4" key={event._id}>
                <div className="card">
                  <img src={eventPhoto} className="card-img-top" alt={event.eventName} />
                  <div className="card-body">
                    <h5 className="card-title">{event.eventName}</h5>
                    <p className="card-text">Location: {event.location}</p>
                    <p className="card-text">Date: {new Date(event.date).toLocaleDateString()}</p>
                    <p className="card-text">Time: {event.time}</p>
                    <button className="custom-btn" onClick={() => handleRegister(event)}>Register</button>
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
