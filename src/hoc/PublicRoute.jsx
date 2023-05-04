import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsOnline } from 'redux/auth/selectors';

export const PublicRoute = ({ children }) => {
  const isOnline = useSelector(selectIsOnline);
  const location = useLocation();
  const fromPage = location.state?.from.pathname || '/';

  if (isOnline) {
    <Navigate to={fromPage} />;
  }
  return children;
};
