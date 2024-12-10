import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaList, FaRocket, FaCheck, FaTimes } from 'react-icons/fa'; // Import FaTimes for the close button
import { useAuth } from '../components/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostGraduate from '../servicesForm/Postgraduate';
import Undergraduate from '../servicesForm/UnderGraduate';
import SouthAfricaTourist from '../servicesForm/SouthAfricaTourist';
import SchengenTourist from '../servicesForm/SchengenTourist';
import EastAfricaVisa from '../servicesForm/EastAfrica';
import MoroccoVisa from '../servicesForm/MoroccoVisa';
import TurkeyTourist from '../servicesForm/TurkeyTourist';

const HomeDashboard = () => {
  const { user } = useAuth(); // Use the user data from AuthContext
  const [showOptions, setShowOptions] = useState(false); // State to manage options visibility
  const [selectedOption, setSelectedOption] = useState(null); // State to store selected option
  
  const handleGetStartedClick = () => {
    setShowOptions(true); // Show options when Get Started is clicked
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option); // Set the selected option
  };

  const handleCloseOptions = () => {
    setShowOptions(false); // Hide the options when close button is clicked
    setSelectedOption(null); // Reset the selected option
  };

  console.log(user);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="container my-4">
      <strong className='h3'><span className='text-primary'>Hi,</span> {user?.name || 'Guest'}</strong>

      {/* three top boxes */}
      <div className="mt-3 row">
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

      {/* start your educational or travel section */}
      <div className="mt-4 mb-5 row">
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
        <div className="mt-4 mb-3">

<div className="p-3 d-flex justify-content-between align-items-center">
  <h2>Choose a Category:</h2>
  {/* Close Button */}
  <button className="mt-3 btn btn-danger btn-sm rounded-circle" onClick={handleCloseOptions}>
    <FaTimes className="text-white" style={{ fontSize: '16px' }} />
  </button>
</div>


           
          
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
