// AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = async () => {
    try {
      const response = await axios.get('https://phylee-75a6aa507dc5.herokuapp.com/api/auth/check-auth');
      setIsLoggedIn(response.data.loggedIn);
    } catch (error) {
      console.error('Error checking authentication:', error);
    }
  };

  const login = async (loginData) => {
    try {
      const response = await axios.post('https://phylee-75a6aa507dc5.herokuapp.com/api/auth/login', loginData);
      if (response.status === 201) {
        localStorage.setItem('userId', response.data.user.id);
        localStorage.setItem('token', response.data.token);
        setIsLoggedIn(true);
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Error during login');
    }
  };

  const logout = async () => {
    try {
      const response = await axios.get('https://phylee-75a6aa507dc5.herokuapp.com/api/auth/logout');
      if (response.status === 200) {
        setIsLoggedIn(false);
        localStorage.removeItem('userId');
        localStorage.removeItem('token');
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
