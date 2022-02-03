import { useSelector } from "react-redux";
import Loader from "react-spinners/ClipLoader";

import CartItem from "./CartItem";
import CartItemsHeader from "./CartItemsHeader";

const Cart = () => {
  const cartState = useSelector((store) => store.userCart.cart);
  return (
    <div className="cart_items">
      <CartItemsHeader />
      {cartState.length === 0 && (
        <div style={{ margin: "100px auto", height: "400px" }}>
          <Loader />
        </div>
      )}
      {cartState.map((prod) => {
        return <CartItem key={prod.product.id} data={prod} />;
      })}
    </div>
  );
};

export default Cart;
