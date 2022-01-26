import { useSelector } from "react-redux";

import CartItem from "./CartItem";
import CartItemsHeader from "./CartItemsHeader";

const Cart = () => {
  const cartState = useSelector((store) => store.userCart.cart);

  return (
    <div className="cart_items">
      <CartItemsHeader />
      {cartState.map((prod) => {
        return <CartItem key={prod.product.id} data={prod} />;
      })}
    </div>
  );
};

export default Cart;
