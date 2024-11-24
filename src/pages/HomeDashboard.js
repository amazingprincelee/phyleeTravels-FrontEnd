import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaList, FaRocket, FaCheck } from 'react-icons/fa';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostGraduate from '../servicesForm/Postgraduate';
import Undergraduate from '../servicesForm/UnderGraduate';
import SouthAfricaTourist from '../servicesForm/SouthAfricaTourist';
import SchengenTourist from '../servicesForm/SchengenTourist';
import EastAfricaVisa from '../servicesForm/EastAfrica';
import MoroccoVisa from '../servicesForm/MoroccoVisa';
import TurkeyTourist from '../servicesForm/TurkeyTourist';

const HomeDashboard = () => {
  const [firstName, setFirstName] = useState('');
  const [showOptions, setShowOptions] = useState(false); // State to manage options visibility
  const [selectedOption, setSelectedOption] = useState(null); // State to store selected option
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');
  

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`https://phyleetravels-backend.onrender.com/api/user/profile/${userId}`, {
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

  const handleGetStartedClick = () => {
    setShowOptions(true); // Show options when Get Started is clicked
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option); // Set the selected option
  };

  return (
    <div className="container my-4">
      <h1>Hi {firstName}</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="text-center card">
            <div className="card-body">
              <FaUser className="mb-2 icon text-danger" />
              <h2 className="card-title">Profile</h2>
              <p className="card-text">75% completed</p>
              <Link className="btn btn-danger" to="/dashboard/profile">
                View and Complete
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="text-center card">
            <div className="card-body">
              <FaList className="mb-2 icon text-danger" />
              <h2 className="card-title">Travel & Tours</h2>
              <p className="card-text">5 received</p>
              <Link to="/dashboard/saved-items" className="btn btn-danger">
                View Saved Items
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="text-center card">
            <div className="card-body">
              <FaRocket className="mb-2 icon text-danger" />
              <h2 className="card-title">Admission</h2>
              <p className="card-text">3 offers received</p>
              <Link to="/dashboard/offers" className="btn btn-danger">
                View All Offers
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 row">
        <div className="col-md-6">
          <div className="p-3 rounded shadow-sm d-flex align-items-center bg-light">
            <FaCheck className="me-3" style={{ fontSize: '50px' }} />
            <div className="flex-grow-1">
              <h6 className="mb-0">Start your educational or travel journey today</h6>
              <small className="text-muted">Your essential guide for every step of your international adventure!</small>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          {!showOptions && (
            <button className="mt-4 custom-btn w-100 text-light" onClick={handleGetStartedClick}>
              Get Started
            </button>
          )}
        </div>
      </div>

      {/* Conditional rendering based on user selection */}
      {showOptions && (
        <div className="mt-4">
          <h2>Choose a Category:</h2>
          <button className="m-2 services-btn text-danger me-3" onClick={() => handleOptionSelect('undergraduate')}>
            Undergraduate Student
          </button>
          <button className="m-2 services-btn text-danger me-3" onClick={() => handleOptionSelect('postgraduate')}>
            Postgraduate Student
          </button>
          <button className="m-2 services-btn text-danger me-3" onClick={() => handleOptionSelect('southAfricaTourist')}>
            South Africa Tourist
          </button>
          <button className="m-2 services-btn text-danger me-3" onClick={() => handleOptionSelect('schengenTourist')}>
            Schengen Tourist
          </button>
          <button className="m-2 services-btn text-danger me-3" onClick={() => handleOptionSelect('eastAfricaVisa')}>
            East Africa Visa
          </button>
          <button className="m-2 services-btn text-danger me-3" onClick={() => handleOptionSelect('moroccoVisa')}>
            Morocco Visa
          </button>
          <button className="m-2 services-btn text-danger" onClick={() => handleOptionSelect('turkeyTourist')}>
            Turkey Tourist
          </button>

          {/* Render selected component */}
          {selectedOption === 'undergraduate' && <Undergraduate />}
          {selectedOption === 'postgraduate' && <PostGraduate />}
          {selectedOption === 'southAfricaTourist' && <SouthAfricaTourist />}
          {selectedOption === 'schengenTourist' && <SchengenTourist />}
          {selectedOption === 'eastAfricaVisa' && <EastAfricaVisa />}
          {selectedOption === 'moroccoVisa' && <MoroccoVisa />}
          {selectedOption === 'turkeyTourist' && <TurkeyTourist />}
        </div>
      )}
    </div>
  );
};

export default HomeDashboard;
