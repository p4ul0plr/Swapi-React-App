import { Navigate } from "react-router-dom";
import isAuthenticated from "../contexts/auth";

interface PrivateRouteProps {
  children: JSX.Element;
}

function PrivateRoute({ children }: PrivateRouteProps) {
  return isAuthenticated() ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
