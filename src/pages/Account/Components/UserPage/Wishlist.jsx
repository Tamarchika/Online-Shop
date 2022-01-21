import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import CartItemsHeader from "./CartItemsHeader";
import WishlistCartItem from "./WishlistCartItem";

const WishlistPage = ({ wishlist }) => {
  return (
    <div className="wishlist_cart_items">
      <CartItemsHeader />
      {wishlist.map((product) => {
        return <WishlistCartItem product={product} />;
      })}
    </div>
  );
};

export default WishlistPage;
