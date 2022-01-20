import { useSelector } from "react-redux";

import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { isLogedIn } = useSelector((store) => store.userStatus);
  return isLogedIn ? <Outlet /> : <Navigate to="/account" />;
};

export default PrivateRoute;
