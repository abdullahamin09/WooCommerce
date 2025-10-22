// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/profile", {
          withCredentials: true,
        });
        if (res.status === 200) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.log("Auth failed:", error.response?.data || error.message);
        setIsAuthenticated(false);
      }
    };
    verifyToken();
  }, []);

  // while checking, don’t render anything yet
  if (isAuthenticated === null) return <p>Loading...</p>;

  // if not logged in → redirect to login
  if (!isAuthenticated) return <Navigate to="/login" replace />;

  // if logged in → show the protected page
  return children;
};

export default ProtectedRoute;
