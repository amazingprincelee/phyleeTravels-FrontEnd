import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = async () => {
    try {
      const response = await axios.get('https://phyleetravels-backend.onrender.com/api/auth/check-auth');
      setIsLoggedIn(response.data.loggedIn);
      if (response.data.loggedIn) {
        setUser(response.data.user);
      }
    } catch (error) {
      console.error('Error checking authentication:', error);
    }
  };

  const login = async (loginData) => {
    try {
      const response = await axios.post('https://phyleetravels-backend.onrender.com/api/auth/login', loginData);
      if (response.status === 201) {
        localStorage.setItem('userId', response.data.user.id);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('email', response.data.user.email);
        setIsLoggedIn(true);
        setUser(response.data.user);

        // Redirect based on role
        if (response.data.user.role === 'admin') {
          return '/AdminPage'; // Redirect to AdminPage if user is admin
        } else {
          return '/dashboard'; // Redirect to dashboard for non-admin users
        }
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Error during login');
    }
  };

  const logout = async () => {
    try {
      const response = await axios.get('https://phyleetravels-backend.onrender.com/api/auth/logout');
      if (response.status === 200) {
        setIsLoggedIn(false);
        setUser(null);
        localStorage.removeItem('userId');
        localStorage.removeItem('token');
        localStorage.removeItem('email');
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const updateUserWithEmail = (email) => {
    setUser({ ...user, email });
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, user, updateUserWithEmail }}>
      {children}
    </AuthContext.Provider>
  );
};
