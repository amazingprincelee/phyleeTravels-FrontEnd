import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();;

  const handleInputChange = (e) => {
    setRegistrationData({ ...registrationData, [e.target.name]: e.target.value });
  };

  const onLoginClick = () => {
    navigate.push('/Login');
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    if (registrationData.password !== registrationData.confirmPassword) {
      setPasswordMatchError(true);
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('https://phyleetravels-backend.onrender.com/api/auth/register', registrationData);
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
        <div className="container d-flex justify-content-center align-items-center min-vh-100" style={{marginTop:'150px'}}>
          <div className="shadow row w-100" style={{ maxWidth: '800px' }}>
            <div className="p-4 col-md-6 d-flex flex-column justify-content-center bg-light">
              <h3 className="text-center">Welcome to Phylee Travels</h3>
              <p className="text-center">Explore our amazing services and take your journey to the next level with Phylee Journey.</p>
              
            </div>
            <div className="p-4 col-md-6" style={{ background: "#960606" }}>
              <h2 className="mb-4 text-center text-white">Register</h2>
              <form onSubmit={handleRegistration}>
                <div className="mb-3">
                  <label htmlFor="firstName" className="text-white form-label">First Name</label>
                  <input type="text" className="form-control" id="firstName" name="firstName" value={registrationData.firstName} onChange={handleInputChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="text-white form-label">Last Name</label>
                  <input type="text" className="form-control" id="lastName" name="lastName" value={registrationData.lastName} onChange={handleInputChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="text-white form-label">Email</label>
                  <input type="email" className="form-control" id="email" name="email" value={registrationData.email} onChange={handleInputChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="text-white form-label">Password</label>
                  <input type="password" className="form-control" id="password" name="password" value={registrationData.password} onChange={handleInputChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="text-white form-label">Confirm Password</label>
                  <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" value={registrationData.confirmPassword} onChange={handleInputChange} required />
                  {passwordMatchError && <p className="text-danger">Passwords do not match</p>}
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="text-white form-label">Phone Number</label>
                  <input type="tel" className="form-control" id="phone" name="phone" value={registrationData.phone} onChange={handleInputChange} required />
                </div>
                <button type="submit" className="custom-btn2 w-100" disabled={loading}>
                  {loading ? (
                    <div className='d-flex justify-content-center align-items-center'>
                    <ThreeDots color="#ffffff" height={20} width={20} />
                    </div>
                  ) : (
                    'Register'
                  )}
                </button>
              </form>
              <div className="mt-3 text-center">
            <p className="text-white">
              Already have an account?{" "}
              <button
                onClick={onLoginClick}
                className="p-0 btn btn-link text-decoration-none text-warning"
                style={{ fontWeight: "bold" }}
              >
                Login Here
              </button>
            </p>
          </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RegistrationForm;
