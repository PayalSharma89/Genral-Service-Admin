import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const authToken = localStorage.getItem('authToken');

  if (!authToken) {
    return <Navigate to="/" />;
  }

  try {
    const tokenPayload = JSON.parse(atob(authToken.split('.')[1]));
    const currentTime = Math.floor(Date.now() / 1000);

    if (tokenPayload.exp < currentTime) {
      localStorage.removeItem('authToken');
      return <Navigate to="/" />;
    }
  } catch (error) {
    // Token is malformed or decoding failed
    localStorage.removeItem('authToken');
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
