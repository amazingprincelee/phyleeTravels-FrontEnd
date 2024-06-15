import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaList, FaRocket, FaCheck } from 'react-icons/fa';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeDashboard = () => {
  const [firstName, setFirstName] = useState('');
//   const [isBannerVisible, setIsBannerVisible] = useState(true);
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');
  

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`https://phylee-75a6aa507dc5.herokuapp.com/api/user/profile/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          setFirstName(response.data.userProfile.firstName);
        } else {
          console.error('Error fetching user profile');
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, [token, userId]);

  // Dummy data for demonstration purposes
  const profileCompletion = 75; // Example percentage
  const numberOfCourses = 5;
  const numberOfOffers = 3;

 

  return (
    <div className="container my-4">
      <h1>Hi {firstName}</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <FaUser className="icon mb-2" />
              <h2 className="card-title">Profile</h2>
              <p className="card-text">{profileCompletion}% completed</p>
              {profileCompletion < 100 && (
                <Link className="btn btn-danger" to="/dashboard/profile">
                  View and Complete
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <FaList className="icon mb-2" />
              <h2 className="card-title">Shortlists</h2>
              <p className="card-text">{numberOfCourses} courses</p>
              <Link to="/dashboard/saved-items" className="btn btn-danger">
                View Saved Items
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <FaRocket className="icon mb-2" />
              <h2 className="card-title">Fastlane</h2>
              <p className="card-text">{numberOfOffers} offers received</p>
              <Link to="/dashboard/offers" className="btn btn-danger">
                View All Offers
              </Link>
            </div>
          </div>
        </div>
      </div>

      
        <div className="d-flex align-items-center p-3 mt-4 bg-light rounded shadow-sm">
          <FaCheck className="me-3" style={{ fontSize: '50px' }} />
          <div className="flex-grow-1">
            <h6 className="mb-0">Start your educational or travel journey today</h6>
            <small className="text-muted">Your essential guide for every step of your international adventure!</small>
          </div>
          <button className="custom-btn me-5 w-50" onClick={() => alert('We are still working on it!')}>
            Register
          </button>
         
        </div>
      
    </div>
  );
};

export default HomeDashboard;
