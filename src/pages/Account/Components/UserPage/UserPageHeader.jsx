import { Link } from "react-router-dom";
import ROUTERS from "../../../../constants/router_constants";
const UserPageHeader = ({ title }) => {
  return (
    <div className="user_header_container">
      <nav className="user_header_nav">
        <li className="user_header_nav_item">
          <Link to={ROUTERS.HOME}>Home</Link>
        </li>
        <li>
          <span>/</span>
        </li>
        <li className="user_header_nav_item active" aria-current="page">
          {title}
        </li>
      </nav>
      <h5>{title}</h5>
    </div>
  );
};

export default UserPageHeader;
