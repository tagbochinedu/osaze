import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useAuth } from "../../Context/AuthenticationContext";

const PrivateRoute = () => {
  const { userData } = useAuth();
  const location = useLocation();
  return userData ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace/>
  );
};

export default PrivateRoute;
