import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Placeholder components for the different sections of the dashboard
const Profile = () => <div>Profile Content</div>;
const AccountSettings = () => <div>Account Settings Content</div>;
const Notifications = () => <div>Notifications Content</div>;
const Help = () => <div>Help Content</div>;

const Dashboard = () => {
  const { path, url } = useRouteMatch();

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
          <div className="position-sticky pt-3">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link className="nav-link active" to={`${url}/profile`}>
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`${url}/account-settings`}>
                  Account Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`${url}/notifications`}>
                  Notifications
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`${url}/help`}>
                  Help
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Dashboard</h1>
          </div>
          <Switch>
            <Route exact path={path}>
              <Profile />
            </Route>
            <Route path={`${path}/profile`}>
              <Profile />
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
