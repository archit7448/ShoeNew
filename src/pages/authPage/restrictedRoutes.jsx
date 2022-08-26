import { Navigate, Outlet, useLocation } from "react-router-dom";

const RestrictedRoute = () => {
  const token = localStorage.getItem("token");
  const location = useLocation();
  return token !== null ? <Navigate to="/" replace /> : <Outlet />;
};

export { RestrictedRoute };
