import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <div className="container mt-5">
      <h1 className="mb-4">Events</h1>
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
                <div className="card-body">
                  <h5 className="card-title">{event.eventName}</h5>
                  <p className="card-text">{event.location}</p>
                  <p className="card-text">{new Date(event.date).toLocaleDateString()}</p>
                  <p className="card-text">{event.time}</p>
                  <button className="btn btn-primary" onClick={() => handleRegister(event)}>Register</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Events;
