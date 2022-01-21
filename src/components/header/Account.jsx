import { FaRegHeart, FaUser, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ROUTERS from "../../constants/router_constants";
import "../../style/components/_account.scss";

const Account = () => {
  const cart = useSelector((store) => store.userCart.cart);
  const loginStatus = useSelector((store) => store.userStatus.isLogedIn);
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
          <span className="cart_qty">{loginStatus ? cart.length : 0}</span>
        </Link>
      </div>
      <div className="user">
        <Link to={`${ROUTERS.USER}/${ROUTERS.USERDASHBOARD}`}>
          <FaUser />
        </Link>
      </div>
    </div>
  );
};

export default Account;
