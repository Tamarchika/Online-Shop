import { Link } from "react-router-dom";
import ROUTERS from "../../../../constants/router_constants";

const UserPageNav = () => {
  return (
    <div>
      <div className="dashboard_navbar">
        <nav>
          <li>
            <Link to={`${ROUTERS.USER}/${ROUTERS.USERDASHBOARD}`}>
              Account Settings
            </Link>
          </li>
          <li>
            <Link to={`${ROUTERS.USER}/${ROUTERS.BILLING}`}>
              Billing information
            </Link>
          </li>
          <li>
            <Link to={`${ROUTERS.USER}/${ROUTERS.WISHLIST}`}>MY wishlist</Link>
          </li>
          <li>
            <Link to={`${ROUTERS.USER}/${ROUTERS.CART}`}>MY cart</Link>
          </li>
          <li>
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
