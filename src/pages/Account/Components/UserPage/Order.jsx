import axios from "axios";
import { useEffect, useState } from "react";
import CartItemsHeader from "./CartItemsHeader";
import OrderCartItem from "./OrderCartItem";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const getOrderProds = async () => {
    const { data } = await axios.get(
      "https://fakestoreapi.com/products?limit=5"
    );
    setOrders(data);
  };
  useEffect(() => {
    getOrderProds();
  }, []);
  return (
    <div className="order_carts">
      <CartItemsHeader />
      {orders.map((product) => {
        return <OrderCartItem key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Order;
