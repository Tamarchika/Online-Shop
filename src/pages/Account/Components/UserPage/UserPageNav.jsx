import { Link, useLocation } from "react-router-dom";
import ROUTERS from "../../../../constants/router_constants";

const UserPageNav = () => {
  const location = useLocation();

  const isPathMatchRoute = (route) => route === location.pathname;

  return (
    <div>
      <div className="dashboard_navbar">
        <nav>
          <li
            className={
              isPathMatchRoute("/user/user-dashboard") ? "active" : undefined
            }
          >
            <Link to={`${ROUTERS.USER}/${ROUTERS.USERDASHBOARD}`}>
              Account Settings
            </Link>
          </li>
          <li
            className={isPathMatchRoute("/user/billing") ? "active" : undefined}
          >
            <Link to={`${ROUTERS.USER}/${ROUTERS.BILLING}`}>
              Billing information
            </Link>
          </li>
          <li
            className={
              isPathMatchRoute("/user/wishlist") ? "active" : undefined
            }
          >
            <Link to={`${ROUTERS.USER}/${ROUTERS.WISHLIST}`}>MY wishlist</Link>
          </li>
          <li className={isPathMatchRoute("/user/cart") ? "active" : undefined}>
            <Link to={`${ROUTERS.USER}/${ROUTERS.CART}`}>MY cart</Link>
          </li>
          <li
            className={isPathMatchRoute("/user/order") ? "active" : undefined}
          >
            <Link to={`${ROUTERS.USER}/${ROUTERS.ORDER}`}>Order</Link>
          </li>
          <li>
            <Link to={ROUTERS.ACCOUNT}>Log-out</Link>
          </li>
        </nav>
      </div>
    </div>
  );
};

export default UserPageNav;
