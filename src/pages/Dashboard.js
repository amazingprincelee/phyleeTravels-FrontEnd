import React from 'react';
import { Link, Route, Routes, useResolvedPath, useNavigate } from 'react-router-dom';
import { FaHome, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Profile from './Profile';
import AccountSettings from './AccountSettings';
import HomeDashboard from './HomeDashboard';

// Placeholder components for the different sections of the dashboard
const Notifications = () => <div>Notifications Content</div>;
const Help = () => <div>Help Content</div>;

const Dashboard = () => {
  const resolvedPath = useResolvedPath("");
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.get('https://phyleetravels-backend.onrender.com/api/auth/logout', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (response.status === 200) {
        navigate.push('/'); // Redirect to homepage after logout
      } else {
        console.error('Logout failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <div className="container-fluid" style={{marginTop: '100px'}}>
      <div className="row">
        {/* Sidebar */}
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
          <div className="pt-3 position-sticky">
          <ul className="nav flex-column">
              <li className="nav-item">
                <Link className="nav-link active" to={`${resolvedPath.pathname}/home-dashboard`}>
                  <FaHome className="me-2" /> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={`${resolvedPath.pathname}/profile`}>
                  <FaUser className="me-2" /> Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`${resolvedPath.pathname}/account-settings`}>
                  <FaCog className="me-2" /> Account Settings
                </Link>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-link" onClick={handleLogout}>
                  <FaSignOutAlt className="me-2" /> Logout
                </button>
              </li>
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main className="mt-3 col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="flex-wrap pt-3 pb-2 mb-3 d-flex justify-content-between flex-md-nowrap align-items-center border-bottom"></div>
          <Routes>
            <Route path="/" element={<HomeDashboard />} />
            <Route path="home-dashboard" element={<HomeDashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="account-settings" element={<AccountSettings />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="help" element={<Help />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
