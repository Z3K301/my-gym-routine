import { Navigate, Outlet } from "react-router-dom";

export const UnloggedUser = () => {
  const isLoggedIn = localStorage.getItem("token") ? true : false;
  console.log(isLoggedIn);
  return isLoggedIn ? <Navigate to="/home" /> : <Outlet />;
};
