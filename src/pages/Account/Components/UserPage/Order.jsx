import CartItemsHeader from "./CartItemsHeader";
import OrderCartItem from "./OrderCartItem";

const Order = () => {
  return (
    <div className="order_carts">
      <CartItemsHeader />
      <OrderCartItem />
      <OrderCartItem />
      <OrderCartItem />
    </div>
  );
};

export default Order;
