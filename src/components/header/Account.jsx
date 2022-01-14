import { FaRegHeart, FaUser, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import ROUTERS from "../../constants/router_constants";
import "../../style/components/_account.scss";

const Account = () => {
  return (
    <div className="account">
      <div className="favorite">
        <FaRegHeart />
      </div>
      <div className="shopping-cart">
        <FaShoppingCart />
      </div>
      <div className="user">
        <Link to={ROUTERS.ACCOUNT}>
          <FaUser />
        </Link>
      </div>
    </div>
  );
};

export default Account;
