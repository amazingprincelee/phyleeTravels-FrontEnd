import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [userProfile, setUserProfile] = useState({});
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`https://http://localhost:3000/api/api/user/profile/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          setUserProfile(response.data.userProfile);
        } else {
          console.error('Error fetching user profile');
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, [token, userId]);

  return (
    <div className='' style={{marginTop: "80px"}}>
      <h2>User Profile</h2>
      <p>First Name: {userProfile.firstName}</p>
      <p>Last Name: {userProfile.lastName}</p>
      <p>Email: {userProfile.email}</p>
      <p>Phone: {userProfile.phone}</p>
      <p>Email Verification: {userProfile.emailVerification ? 'Verified' : 'Not Verified'}</p>
    </div>
  );
};

export default Profile;
