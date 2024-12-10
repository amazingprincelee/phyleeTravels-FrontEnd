import React from 'react';
import { useNavigate } from 'react-router-dom';

const EmailVerificationSuccess = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Redirect the user to the login route
    navigate.push('/login');
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="mx-auto card" style={{ maxWidth: '400px' }}>
        <div className="card-body">
          <h2 className="text-center card-title text-success">Email Verification Successful</h2>
          <p className="text-center">Your email address has been successfully verified.</p>
          <div className="text-center">
            <button className="submit-btn" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerificationSuccess;
