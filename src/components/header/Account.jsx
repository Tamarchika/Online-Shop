import { FaRegHeart, FaUser, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import ROUTERS from "../../constants/router_constants";
import "../../style/components/_account.scss";

const Account = () => {
  return (
    <div className="account">
      <div className="favorite">
        <Link to={`${ROUTERS.USER}/${ROUTERS.WISHLIST}`}>
          <FaRegHeart />
        </Link>
      </div>
      <div className="shopping-cart">
        <Link to={`${ROUTERS.USER}/${ROUTERS.CART}`}>
          <FaShoppingCart />
        </Link>
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
