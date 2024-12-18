import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';

const VerificationForm = ({ userId, email }) => {
  const [verificationCode, setVerificationCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [verificationMessage, setVerificationMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
   
    // Update the verification message when email changes
    if (email) {
      setVerificationMessage(`A verification code has been sent to your email address: ${email}.`);
    }
  }, [userId, email]);

  const handleInputChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const response = await axios.post(`https://phyleetravels-backend.onrender.com/api/auth/verify/${userId}`, { verifyCode: verificationCode });
  
      if (response.status === 201) {
        // Verification successful, redirect to successpage or any other page
        navigate.push('/verificationSuccess');
      } else {
        setError('Verification failed');
      }
    } catch (error) {
      setError('An error occurred while verifying');
      console.error('Verification error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="mx-auto card" style={{ maxWidth: '400px' }}>
        <div className="card-body">
          <h2 className="text-center card-title">Verification</h2>
          <p className="text-center text-info">{verificationMessage}</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="verificationCode"
              value={verificationCode}
              onChange={handleInputChange}
              maxLength={6}
              autoFocus
              className="mb-3 form-control"
              placeholder="Verification Code"
            />
            <button type="submit" className="custom-btn2" disabled={loading}>
              {loading ? (
                <div className='d-flex justify-content-center align-items-center'>
                <ThreeDots color="#ffffff" height={20} width={20} />
                </div>
              ) : (
                'Verify'
              )}
            </button>
          </form>
          {error && <p className="mt-3 text-center text-danger">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default VerificationForm;
