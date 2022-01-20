import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ROUTERS from "../../../../constants/router_constants";

const UserPageHeader = ({ title }) => {
  const [currentUser, setCurrentUser] = useState({});
  const getCurrentUser = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/users/1");
      setCurrentUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

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
      <p>{currentUser.username}</p>
      <p>{currentUser.email}</p>
    </div>
  );
};

export default UserPageHeader;
