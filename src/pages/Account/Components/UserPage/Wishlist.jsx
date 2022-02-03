import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "react-spinners/ClipLoader";
import { toast } from "react-toastify";

import CartItemsHeader from "./CartItemsHeader";
import WishlistCartItem from "./WishlistCartItem";

const WishlistPage = () => {
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState([]);

  const getWishlistProducts = async () => {
    try {
      const { data } = await axios.get(
        "https://fakestoreapi.com/products?limit=20"
      );
      setWishlist(data);
      setLoading(false);
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
      {loading && (
        <div style={{ margin: "100px auto", height: "400px" }}>
          <Loader />
        </div>
      )}
      {wishlist.map((product) => {
        return <WishlistCartItem key={product.id} product={product} />;
      })}
    </div>
  );
};

export default WishlistPage;
