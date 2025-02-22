import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('google_jwt');
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
