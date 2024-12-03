import React from 'react';
import { Link, Route, Switch, useRouteMatch, useHistory } from 'react-router-dom';
import { FaUser, FaCalendarAlt, FaEnvelope, FaUserCircle, FaCog, FaSignOutAlt, FaHome, FaPlane, FaFolder, FaMicrophone } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Profile from './Profile';
import AccountSettings from './AccountSettings';
import AdminHomeDashboard from './AdminHomeDashboard';
import EventArea from '../adminPages/EventArea';
import ContactFormArea from '../adminPages/ContactFormArea';

// Placeholder components for the different sections of the dashboard
const Notifications = () => <div>Notifications Content</div>;
const Help = () => <div>Help Content</div>;

const Dashboard = () => {
  const { path, url } = useRouteMatch();
  const history = useHistory();

  const handleLogout = async () => {
    try {
      const response = await axios.get('https://phyleetravels-backend.onrender.com/api/auth/logout', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (response.status === 200) {
        history.push('/'); // Redirect to homepage after logout
      } else {
        console.error('Logout failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <div className="container-fluid" style={{ marginTop: '100px'}}>
      <div className="row">
        {/* Sidebar */}
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
          <div className="pt-3 position-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link className="nav-link active" to={`${url}/admin-dashboard`}>
                  <FaHome className="me-2" /> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={`${url}/admin-dashboard`}>
                  <FaUser className="me-2" /> Staff
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={`${url}/event-area`}>
                  <FaFolder className="me-2" /> Application
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={`${url}/event-area`}>
                  <FaPlane className="me-2" /> Flight
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={`${url}/event-area`}>
                  <FaCalendarAlt className="me-2" /> Appointment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={`${url}/event-area`}>
                  <FaMicrophone className="me-2" /> Event
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={`${url}/contactForm-area`}>
                  <FaEnvelope className="me-2" /> Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={`${url}/profile`}>
                  <FaUserCircle className="me-2" /> Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`${url}/account-settings`}>
                  <FaCog className="me-2" /> Settings
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
          <Switch>
            <Route exact path={path}>
              <AdminHomeDashboard />
            </Route>
            <Route exact path={`${path}/admin-dashboard`}>
              <AdminHomeDashboard />
            </Route>
            <Route path={`${path}/profile`}>
              <Profile />
            </Route>
            <Route path={`${path}/event-area`}>
              <EventArea />
            </Route>
            <Route path={`${path}/contactForm-area`}>
              <ContactFormArea />
            </Route>
            <Route path={`${path}/account-settings`}>
              <AccountSettings />
            </Route>
            <Route path={`${path}/notifications`}>
              <Notifications />
            </Route>
            <Route path={`${path}/help`}>
              <Help />
            </Route>
          </Switch>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
