//src/api.js
import { useAuth } from './components/AuthContext';  // Import the useAuth hook from AuthContext

const getToken = () => localStorage.getItem('token');

const setToken = (token) => localStorage.setItem('token', token);

const clearToken = () => localStorage.removeItem('token');

const makeAuthenticatedRequest = async (url, method, data) => {
  const { api } = useAuth(); // Access the api instance from AuthContext

  const token = getToken();
  if (!token) {
    // Handle unauthenticated state
    return null;
  }

  try {
    // Use the api instance from AuthContext
    const response = await api({
      method,
      url, // url will be appended to the baseURL set in AuthContext
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
