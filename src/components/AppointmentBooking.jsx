import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';

const AppointmentBooking = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    state: '',
    city: '',
    journeyType: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Mock submission logic
    setTimeout(() => {
      alert('Appointment booked successfully!');
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center min-vh-100">
      <div className="shadow row w-100" style={{ maxWidth: '800px' }}>
        <div className="p-4 col-lg-6 col-md-12 d-flex flex-column justify-content-center bg-light">
          <h3 className="text-center">Welcome to Phylee Appointment Service</h3>
          <p className="text-center">
          Book an appointment today and get personalized consultation. Please note that the consultation fee is 5000 Naira.
          </p>
        </div>
        <div className="p-4 col-lg-6 col-md-12" style={{ background: '#960606' }}>
          {error && <p className="bg-white text-danger">{error}</p>}
          <form className="text-white" onSubmit={handleSubmit}>
            <div className="mb-3 row">
              <div className="col">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3 row">
              <div className="col">
                <label htmlFor="state" className="form-label">State</label>
                <input
                  type="text"
                  className="form-control"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col">
                <label htmlFor="city" className="form-label">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="journeyType" className="form-label">Kind of Journey</label>
              <select
                className="form-select"
                id="journeyType"
                name="journeyType"
                value={formData.journeyType}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Journey Type</option>
                <option value="school">School</option>
                <option value="other">Other</option>
              </select>
            </div>
            <button
              type="submit"
              className="btn w-100"
              style={{ backgroundColor: '#00007e', color: 'white' }}
              disabled={loading}
            >
              {loading ? (
                <ThreeDots
                  height="15"
                  width="50"
                  radius="9"
                  color="white"
                  ariaLabel="three-dots-loading"
                  visible={true}
                />
              ) : (
                'Book Appointment'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBooking;
