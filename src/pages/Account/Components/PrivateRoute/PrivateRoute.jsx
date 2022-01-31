import { useSelector } from "react-redux";

import { Outlet } from "react-router-dom";
import AccountPage from "../../AccountPage";

const PrivateRoute = () => {
  const { isLogedIn } = useSelector((store) => store.userStatus);
  return isLogedIn ? <Outlet /> : <AccountPage />;
};

export default PrivateRoute;
