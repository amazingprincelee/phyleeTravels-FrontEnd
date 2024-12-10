import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { FaHome, FaUser, FaCog, FaBell, FaQuestionCircle } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./Profile";
import AccountSettings from "./AccountSettings";
import HomeDashboard from "./HomeDashboard";

// Placeholder components for the different sections of the dashboard
const Notifications = () => <div>Notifications Content</div>;
const Help = () => <div>Help Content</div>;

const Dashboard = () => {
  return (
    <div className="container-fluid" style={{ marginTop: "100px" }}>
      <div className="row">
        {/* Sidebar */}
        <nav
          id="sidebarMenu"
          className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
        >
          <div className="pt-3 position-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/dashboard/home-dashboard"
                >
                  <FaHome className="me-2" /> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/dashboard/profile">
                  <FaUser className="me-2" /> Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard/account-settings">
                  <FaCog className="me-2" /> Account Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard/notifications">
                 <FaBell className="me-2" />  Notifications
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard/help">
                 <FaQuestionCircle className="me-2"/> Help
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main className="mt-3 col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="flex-wrap pt-3 pb-2 mb-3 d-flex justify-content-between flex-md-nowrap align-items-center border-bottom"></div>

          {/* Rendering the nested routes using Routes */}
          <Routes>
            {/* Default route for dashboard */}
            <Route index element={<HomeDashboard />} />
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
