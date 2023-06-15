import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isLoggedIn = localStorage.getItem("token") ? true : false;
  return isLoggedIn ? <Outlet /> : <Navigate to="/landing" />;
};

export default PrivateRoute;
