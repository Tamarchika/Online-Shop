import CartItem from "./CartItem";
import CartItemsHeader from "./CartItemsHeader";

const Cart = () => {
  return (
    <div className="cart_items">
      <CartItemsHeader />
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  );
};

export default Cart;
