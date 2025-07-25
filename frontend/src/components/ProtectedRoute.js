import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = ({ children }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Try to fetch products as a quick auth check
        await axios.get(`${process.env.REACT_APP_API_URL}/products`, { withCredentials: true });
        setAuth(true);
      } catch {
        setAuth(false);
      }
    };
    checkAuth();
  }, []);

  if (auth === null) return <div className="flex items-center justify-center min-h-screen">Checking authentication...</div>;
  if (!auth) return <Navigate to="/login" />;
  return children;
};

export default ProtectedRoute; 