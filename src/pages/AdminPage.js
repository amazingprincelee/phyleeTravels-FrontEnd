import React from 'react';
import { Link, Route, Switch, useRouteMatch, useHistory } from 'react-router-dom';
import { FaUser, FaCalendarAlt, FaEnvelope, FaUserCircle, FaCog, FaSignOutAlt } from 'react-icons/fa';
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
      const response = await axios.get('https://phylee-75a6aa507dc5.herokuapp.com/api/auth/logout', {
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
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
          <div className="position-sticky pt-3">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link className="nav-link active" to={`${url}/admin-dashboard`}>
                  <FaUser className="me-2" /> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={`${url}/event-area`}>
                  <FaCalendarAlt className="me-2" /> Event
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={`${url}/contactForm-area`}>
                  <FaEnvelope className="me-2" /> Contact Form
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={`${url}/profile`}>
                  <FaUserCircle className="me-2" /> Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`${url}/account-settings`}>
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
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-3">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"></div>
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
