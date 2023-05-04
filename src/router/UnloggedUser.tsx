import { Navigate, Outlet } from "react-router-dom";

export const UnloggedUser = () => {
  const isLoggedIn = true;
  return isLoggedIn ? <Navigate to="/" /> : <Outlet />;
};
