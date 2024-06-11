import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import VerificationForm from './VerificationForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegistrationForm = () => {
  const [registrationData, setRegistrationData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [userData, setUserData] = useState(null);
  const history = useHistory();

  const handleInputChange = (e) => {
    setRegistrationData({ ...registrationData, [e.target.name]: e.target.value });
  };

  const onLoginClick = () => {
    history.push('/Login');
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    if (registrationData.password !== registrationData.confirmPassword) {
      setPasswordMatchError(true);
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('https://phylee-75a6aa507dc5.herokuapp.com/api/auth/register', registrationData);
      if (response.status === 200) {
        const { userId, email } = response.data;
        setUserData({ userId, email });
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {userData ? (
        <VerificationForm userId={userData.userId} email={userData.email} />
      ) : (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
          <div className="row shadow w-100" style={{ maxWidth: '800px' }}>
            <div className="col-md-6 d-flex flex-column justify-content-center p-4 bg-light">
              <h3 className="text-center">Welcome to Phylee Journey</h3>
              <p className="text-center">Explore our amazing services and take your journey to the next level with Phylee Journey.</p>
              <ul>
                <li>Service 1: Detailed descriptions of service 1.</li>
                <li>Service 2: Detailed descriptions of service 2.</li>
                <li>Service 3: Detailed descriptions of service 3.</li>
              </ul>
            </div>
            <div className="col-md-6 p-4" style={{ background: "#960606" }}>
              <h2 className="text-center mb-4 text-white">Register</h2>
              <p className="text-center mt-3 text-white">Already have an account? <button className="btn btn-link p-0" onClick={onLoginClick}>Login</button></p>
              <form onSubmit={handleRegistration}>
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label text-white">First Name</label>
                  <input type="text" className="form-control" id="firstName" name="firstName" value={registrationData.firstName} onChange={handleInputChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label text-white">Last Name</label>
                  <input type="text" className="form-control" id="lastName" name="lastName" value={registrationData.lastName} onChange={handleInputChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-white">Email</label>
                  <input type="email" className="form-control" id="email" name="email" value={registrationData.email} onChange={handleInputChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label text-white">Password</label>
                  <input type="password" className="form-control" id="password" name="password" value={registrationData.password} onChange={handleInputChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label text-white">Confirm Password</label>
                  <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" value={registrationData.confirmPassword} onChange={handleInputChange} required />
                  {passwordMatchError && <p className="text-danger">Passwords do not match</p>}
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label text-white">Phone Number</label>
                  <input type="tel" className="form-control" id="phone" name="phone" value={registrationData.phone} onChange={handleInputChange} required />
                </div>
                <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                  {loading ? (
                    <ThreeDots color="#ffffff" height={20} width={20} />
                  ) : (
                    'Register'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RegistrationForm;
