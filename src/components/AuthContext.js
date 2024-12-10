import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";


// Create context
export const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("authToken"));
  const [user, setUser] = useState(() =>
    token ? jwtDecode(localStorage.getItem("authToken")) : null
  );

  // Axios instance
  const api = axios.create({
    baseURL: "http://localhost:3000/api",
  });

  // Add interceptor to update Authorization header
  api.interceptors.request.use((config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  // Handle token changes
  useEffect(() => {
    if (token) {
      setUser(jwtDecode(token));
      localStorage.setItem("authToken", token);
    } else {
      setUser(null);
      localStorage.removeItem("authToken");
    }
  }, [token]);

  // Methods
  const register = async (data) => {
    try {
      const response = await api.post("/auth/register", data);
      return response.data;
    } catch (error) {
      throw error.response?.data?.message || "Registration failed";
    }
  };

  const login = async (credentials) => {
    try {
      const response = await api.post("/auth/login", credentials);
      setToken(response.data.token);
      return response.data.message;
    } catch (error) {
      throw error.response?.data?.message || "Login failed";
    }
  };

  const verify = async (userId, verifyCode) => {
    try {
      const response = await api.post(`/auth/verify/${userId}`, { verifyCode });
      return response.data.message;
    } catch (error) {
      throw error.response?.data?.message || "Verification failed";
    }
  };

  const logout = async () => {
    try {
      await api.get("/auth/logout"); // Optional, ensure server-side session invalidation
    } catch (error) {
      console.error("Logout failed:", error.response?.data?.message || error.message);
    } finally {
      setToken(null); // Clear token state
      localStorage.removeItem("authToken"); // Ensure it's removed from localStorage
    }
  };
  

  return (
    <AuthContext.Provider value={{ user, token, register, login, verify, logout, api }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for using AuthContext
export const useAuth = () => useContext(AuthContext);
