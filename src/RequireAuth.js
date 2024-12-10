// src/RequireAuth.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./components/AuthContext";

const RequireAuth = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default RequireAuth;
