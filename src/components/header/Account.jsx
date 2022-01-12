import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
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
        <FaUser />
      </div>
    </div>
  );
};

export default Account;
