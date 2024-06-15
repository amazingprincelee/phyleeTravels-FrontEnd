import React, { useState } from 'react';
import axios from 'axios';

const AccountSettings = () => {
  const [phone, setPhone] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleUpdateProfile = async () => {
    try {
      const response = await axios.put(
        `https://phylee-75a6aa507dc5.herokuapp.com/api/user/updateProfile/${userId}`,
        { phone },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setSuccessMessage('Profile updated successfully');
        setPhone(''); // Optionally, clear the phone input after successful update
      } else {
        setErrorMessage('Error updating profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      setErrorMessage('Error updating profile');
    }
  };

  return (
    <div>
      <h2>Account Settings</h2>
      {successMessage && (
        <div className="alert alert-success" role="alert">
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Phone
        </label>
        <input
          type="text"
          className="form-control"
          id="phone"
          value={phone}
          onChange={handlePhoneChange}
        />
      </div>
      <button className="custom-btn" onClick={handleUpdateProfile}>
        Update Profile
      </button>
    </div>
  );
};

export default AccountSettings;
