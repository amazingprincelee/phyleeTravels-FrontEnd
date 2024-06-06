// api.js

import axios from 'axios';

const getToken = () => localStorage.getItem('token');

const setToken = (token) => localStorage.setItem('token', token);

const clearToken = () => localStorage.removeItem('token');

const makeAuthenticatedRequest = async (url, method, data) => {
  const token = getToken();
  if (!token) {
    // Handle unauthenticated state
    return null;
  }

  try {
    const response = await axios({
      method,
      url,
      data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    // Handle authentication errors
    console.error('Authentication error:', error);
    return null;
  }
};

export { getToken, setToken, clearToken, makeAuthenticatedRequest };
