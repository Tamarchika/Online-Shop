
import { useSelector } from "react-redux";

import "../../style/components/_product.scss";
import "../../style/layout/_grid.scss";
import "../../style/pages/_home.scss";
import { FaClock, FaDollarSign, FaHeart, FaStar } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineLocalShipping } from "react-icons/md";
import Quantity from "./Quantity";

const ProductDetails = () => {
  const product = useSelector((store) => {
    return store.product.product;
  });

  return (
    <div className="product_pricelist">
      <h2>{product.title}</h2>
      <div className="product_pricelist_rating">
        <div className="price">
          <span>${product.price}</span>
          <del>${parseFloat(product.price + 39).toFixed(2)}</del>
        </div>
        <div className="star">
          <ul>
            <li>
              <FaStar />
            </li>
            <li>
              <FaStar />
            </li>
            <li>
              <FaStar />
            </li>
            <li>
              <FaStar />
            </li>
            <li>
              <FaStar />
            </li>
            <li>{product.rating.rate}</li>
            <li className="point">({product.rating.count} rating)</li>
          </ul>
        </div>
      </div>
      <p>{product.description}</p>
      <div className="product_pricelist_selector">
        <div className="product_pricelist_selector_size">
          <h6>Sizes</h6>
          <div className="sizes" id="sizes">
            <li className="sizes-all">S</li>
            <li className="sizes-all active">M</li>
            <li className="sizes-all">L</li>
            <li className="sizes-all">XL</li>
            <li className="sizes-all">XXL</li>
          </div>
        </div>
        <div className="product_pricelist_selector_color">
          <h6>Colors</h6>
          <div className="colors" id="colors">
            <li className="colorall color-1 active"></li>
            <li className="colorall color-2"></li>
          </div>
        </div>
        <div className="product_pricelist_selector_quantity">
          <h6>Quantity</h6>
          <Quantity />
        </div>
      </div>
      <div className="product_pricelist_selector_button">
        <a href="/" className="btn_primary cart_bg">
          add to cart
          <span className="cart">
            <FiShoppingCart />
          </span>
        </a>
        <a href="/" className="btn_primary  favorite_product">
          <span>
            <FaHeart />
          </span>
        </a>
        <div className="product_pricelist_selector_button_item">
          <div className="shipping">
            <div className="icon">
              <MdOutlineLocalShipping />
            </div>
            <p>Free Shipping Cast</p>
          </div>
          <div className="delivery">
            <div className="icon">
              <FaClock />
            </div>
            <p>3 Days Delivery Time</p>
          </div>
          <div className="cash">
            <div className="icon">
              <FaDollarSign />
            </div>
            <p>Cash on Delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
