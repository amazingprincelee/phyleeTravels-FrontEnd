import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function RegisterEvent() {
  const history = useHistory();
  const location = useLocation();

  // State to hold event data and registration form data
  const [event, setEvent] = useState(null);
  const [registrationData, setRegistrationData] = useState({
    eventId: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    preferredStudyDestination: '',
    nearestPhyleeJourneysOffice: '',
    preferredStudyLevel: '',
    howDidYouHearAboutPhyleeJourneys: '',
    lastEducationalQualification: '',
    educationFund: ''
  });

  // Modal state
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', message: '' });

  // Effect to handle initial load and refresh
  useEffect(() => {
    // Check if location state contains event
    if (location.state && location.state.event) {
      setEvent(location.state.event);
      setRegistrationData(prevData => ({
        ...prevData,
        eventId: location.state.event._id // Set eventId in registrationData
      }));
    } else {
      // Handle the case where event is not available in location state
      // Redirect to events page or handle gracefully
      history.push('/events');
    }
  }, [location.state, history]);

  // Handle form input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setRegistrationData({
      ...registrationData,
      [id]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://phyleetravels-backend.onrender.com/api/events/register_for_event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(registrationData)
      });
      const data = await response.json();
      if (response.ok) {
        setModalContent({ title: 'Success', message: 'Registration successful!' });
      } else {
        setModalContent({ title: 'Error', message: 'Failed to register: ' + data.error });
      }
    } catch (error) {
      console.error('Error:', error);
      setModalContent({ title: 'Error', message: 'An error occurred while registering.' });
    } finally {
      setModalVisible(true);
    }
  };

  // Close modal and redirect to events page
  const closeModal = () => {
    setModalVisible(false);
    history.push('/events');
  };

  // Render loading state or null if event is not loaded yet
  if (!event) {
    return null; // or loading indicator, depending on your UI needs
  }

  return (
    <div className="container mt-5 mb-5">
      <h1 className="mb-4">Register for {event.eventName}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input type="text" className="form-control" id="firstName" value={registrationData.firstName} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input type="text" className="form-control" id="lastName" value={registrationData.lastName} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" value={registrationData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
          <input type="tel" className="form-control" id="phoneNumber" value={registrationData.phoneNumber} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="preferredStudyDestination" className="form-label">Preferred Study Destination</label>
          <select className="form-select" id="preferredStudyDestination" value={registrationData.preferredStudyDestination} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="Germany">Germany</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="nearestPhyleeJourneysOffice" className="form-label">Nearest Phylee Journey Office</label>
          <select className="form-select" id="nearestPhyleeJourneysOffice" value={registrationData.nearestPhyleeJourneysOffice} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Lagos Office">Lagos Office</option>
            <option value="Abuja Office">Abuja Office</option>
            <option value="Port Harcourt Office">Port Harcourt Office</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="preferredStudyLevel" className="form-label">Preferred Study Level</label>
          <select className="form-select" id="preferredStudyLevel" value={registrationData.preferredStudyLevel} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Undergraduate">Undergraduate</option>
            <option value="Master's">Master's</option>
            <option value="PhD">PhD</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="howDidYouHearAboutPhyleeJourneys" className="form-label">How Did You Hear About Phylee Journeys?</label>
          <input type="text" className="form-control" id="howDidYouHearAboutPhyleeJourneys" value={registrationData.howDidYouHearAboutPhyleeJourneys} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="lastEducationalQualification" className="form-label">Last Educational Qualification</label>
          <select className="form-select" id="lastEducationalQualification" value={registrationData.lastEducationalQualification} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="High School Diploma">High School Diploma</option>
            <option value="Bachelor's Degree">Bachelor's Degree</option>
            <option value="Master's Degree">Master's Degree</option>
            <option value="PhD">PhD</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="educationFund" className="form-label">Education Fund</label>
          <select className="form-select" id="educationFund" value={registrationData.educationFund} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Self-funded">Self-funded</option>
            <option value="Scholarship">Scholarship</option>
            <option value="Loan">Loan</option>
            <option value="Sponsorship">Sponsorship</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button type="submit" className="custom-btn text-light">Submit</button>
      </form>

      {/* Modal */}
      {modalVisible && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{modalContent.title}</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button>
              </div>
              <div className="modal-body">
                <p>{modalContent.message}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RegisterEvent;
