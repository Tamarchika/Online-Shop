import CartItemsHeader from "./CartItemsHeader";
import WishlistCartItem from "./WishlistCartItem";

const WishlistPage = () => {
  return (
    <div className="wishlist_cart_items">
      <CartItemsHeader />
      <WishlistCartItem />
      <WishlistCartItem />
      <WishlistCartItem />
    </div>
  );
};

export default WishlistPage;
