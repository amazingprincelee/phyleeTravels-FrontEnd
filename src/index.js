import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { HashRouter } from 'react-router-dom';
import { AuthProvider } from '../src/components/AuthContext'; // Import AuthProvider

ReactDOM.render(
  <AuthProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </AuthProvider>,
  document.getElementById('root')
);
