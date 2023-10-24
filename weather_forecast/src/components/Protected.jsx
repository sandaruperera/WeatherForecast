import React from 'react';
import { Navigate } from 'react-router-dom';

const Protected = ({ children }) => {
  const username = localStorage.getItem("username");
  if (!username) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default Protected;