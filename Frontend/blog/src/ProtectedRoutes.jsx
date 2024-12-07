import { Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContexts';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (user) {
    return children;
  } else {
    return <Navigate to="/register" />;
  }
};

export default ProtectedRoute;
