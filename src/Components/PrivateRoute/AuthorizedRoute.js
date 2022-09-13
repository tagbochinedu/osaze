import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useAuth } from "../../Context/AuthenticationContext";

const AuthorizedRoute = (props) => {
  const { userData } = useAuth();
  const location = useLocation();
  return userData.role === props.allowedRole ? (
    <Outlet />
  ) : (
    <Navigate to="/403" state={{ from: location }} replace/>
  );
};

export default AuthorizedRoute;
