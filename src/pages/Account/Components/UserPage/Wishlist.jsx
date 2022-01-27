import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import CartItemsHeader from "./CartItemsHeader";
import WishlistCartItem from "./WishlistCartItem";

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([]);

  const getWishlistProducts = async () => {
    try {
      const { data } = await axios.get(
        "https://fakestoreapi.com/products?limit=20"
      );
      setWishlist(data);
    } catch (error) {
      toast.error("Can't get wishlist");
    }
  };

  useEffect(() => {
    getWishlistProducts();
  }, []);
  return (
    <div className="wishlist_cart_items">
      <CartItemsHeader />
      {wishlist.map((product) => {
        return <WishlistCartItem key={product.id} product={product} />;
      })}
    </div>
  );
};

export default WishlistPage;
