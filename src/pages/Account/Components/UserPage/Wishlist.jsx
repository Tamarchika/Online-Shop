import axios from "axios";
import { useEffect, useState } from "react";

import CartItemsHeader from "./CartItemsHeader";
import WishlistCartItem from "./WishlistCartItem";

const WishlistPage = () => {
  const [cartProducts, setCartProducts] = useState([]);

  const getUserCart = async () => {
    const response = await axios.get("https://fakestoreapi.com/carts/user/1");
    const promises = response.data[0].products.map((item) =>
      axios.get(`https://fakestoreapi.com/products/${item.productId}`)
    );
    const responses = await axios.all(promises);
    const products = responses.map((res, i) => {
      return {
        data: res.data,
        qty: response.data[0].products[i].quantity,
      };
    });
    console.log(products);
    setCartProducts(products);
  };

  useEffect(() => {
    getUserCart();
  }, []);
  return (
    <div className="wishlist_cart_items">
      <CartItemsHeader />
      {cartProducts.map((product) => {
        return <WishlistCartItem product={product} />;
      })}
    </div>
  );
};

export default WishlistPage;
