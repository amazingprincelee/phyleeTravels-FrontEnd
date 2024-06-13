import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    preferredStudyDestination: 'USA',
    whenPlanToStudy: 'January 2024',
    nearestPhyleeJourneysOffice: 'Lagos Office',
    preferredStudyLevel: 'Undergraduate',
    agreeToTerms: false,
    receiveUpdates: false,
    contactByPhone: false,
    contactByEmail: false,
    contactBySMS: false
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', message: '' });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://phylee-75a6aa507dc5.herokuapp.com/api/contacts/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        setModalContent({ title: 'Success', message: 'Contact form submitted successfully!' });
      } else {
        setModalContent({ title: 'Error', message: 'Failed to submit contact form: ' + data.error });
      }
    } catch (error) {
      console.error('Error:', error);
      setModalContent({ title: 'Error', message: 'An error occurred while submitting the contact form.' });
    } finally {
      setModalVisible(true);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="container mt-5">
      <div className="d-flex flex-wrap">
        <div className="left-div flex-fill p-4 text-white d-flex flex-column justify-content-center">
          <h2>Welcome to Phylee Journey</h2>
          <p>Start your journey with us today!</p>
        </div>
        <div className="right-div flex-fill p-4" style={{ background: '#960606' }}>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label text-white">First Name</label>
              <input type="text" className="form-control" id="firstName" placeholder="Enter your first name" value={formData.firstName} onChange={handleChange} />
            </div>

            <div className="mb-3">
              <label htmlFor="lastName" className="form-label text-white">Last Name</label>
              <input type="text" className="form-control" id="lastName" placeholder="Enter your last name" value={formData.lastName} onChange={handleChange} />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label text-white">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
            </div>

            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label text-white">Phone Number</label>
              <input type="tel" className="form-control" id="phoneNumber" placeholder="Enter your phone number" value={formData.phoneNumber} onChange={handleChange} />
            </div>

            <div className="mb-3">
              <label htmlFor="preferredStudyDestination" className="form-label text-white">Your Preferred Study Destination</label>
              <select className="form-select" id="preferredStudyDestination" value={formData.preferredStudyDestination} onChange={handleChange}>
                <option>USA</option>
                <option>UK</option>
                <option>Canada</option>
                <option>Australia</option>
                <option>Germany</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="whenPlanToStudy" className="form-label text-white">When do you plan to study?</label>
              <select className="form-select" id="whenPlanToStudy" value={formData.whenPlanToStudy} onChange={handleChange}>
                <option>January 2024</option>
                <option>May 2024</option>
                <option>September 2024</option>
                <option>January 2025</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="nearestPhyleeJourneysOffice" className="form-label text-white">Nearest Phylee Journey Office</label>
              <select className="form-select" id="nearestPhyleeJourneysOffice" value={formData.nearestPhyleeJourneysOffice} onChange={handleChange}>
                <option>Lagos Office</option>
                <option>Abuja Office</option>
                <option>Port Harcourt Office</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="preferredStudyLevel" className="form-label text-white">Preferred Study Level</label>
              <select className="form-select" id="preferredStudyLevel" value={formData.preferredStudyLevel} onChange={handleChange}>
                <option>Undergraduate</option>
                <option>Master's</option>
                <option>PhD</option>
              </select>
            </div>

            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id="agreeToTerms" checked={formData.agreeToTerms} onChange={handleChange} />
              <label className="form-check-label text-white" htmlFor="agreeToTerms">
                I agree to Phylee's terms and conditions
              </label>
            </div>

            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id="receiveUpdates" checked={formData.receiveUpdates} onChange={handleChange} />
              <label className="form-check-label text-white" htmlFor="receiveUpdates">
                I would like to receive updates from Phylee
              </label>
            </div>

            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id="contactByPhone" checked={formData.contactByPhone} onChange={handleChange} />
              <label className="form-check-label text-white" htmlFor="contactByPhone">
                Please contact me by phone
              </label>
            </div>

            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id="contactByEmail" checked={formData.contactByEmail} onChange={handleChange} />
              <label className="form-check-label text-white" htmlFor="contactByEmail">
                Please contact me by email
              </label>
            </div>

            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id="contactBySMS" checked={formData.contactBySMS} onChange={handleChange} />
              <label className="form-check-label text-white" htmlFor="contactBySMS">
                Please contact me by SMS
              </label>
            </div>

            <button type="submit" className=" phylee-primary-btn">Contact now</button>
          </form>
        </div>
      </div>

      {/* Modal */}
      <div className={`modal fade ${modalVisible ? 'show' : ''}`} style={{ display: modalVisible ? 'block' : 'none' }} tabIndex="-1" role="dialog">
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
              <button type="button" className="btn btn-primary" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
