
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FaClock, FaDollarSign, FaHeart, FaStar } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineLocalShipping } from "react-icons/md";
import Quantity from "./Quantity";

import PropTypes from "prop-types";

import { toast } from "react-toastify";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../redux/actions";

const ProductDetails = (props) => {
  const [productExist, setProductExist] = useState(false);

  const cartState = useSelector((store) => store.userCart.cart);

  useEffect(() => {
    const productIds = cartState.map((prod) => prod.product?.id);
    setProductExist(productIds.includes(props.product?.id));
  }, [props, cartState]);

  const dispatch = useDispatch();
  const addToCartHandler = async (id) => {
    try {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      dispatch(
        addProductToCart({
          product: data,
          qty: 1,
        })
      );
    } catch (error) {
      toast.error("Product was not added");
    }
  };

  return (
    <div className="product_pricelist">
      <h2>{props.product?.title}</h2>
      <div className="product_pricelist_rating">
        <div className="price">
          <span>${props.product?.price}</span>
          <del>${parseFloat(props.product?.price + 39).toFixed(2)}</del>
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
            <li>{props.product?.rating.rate}</li>
            <li className="point">({props.product?.rating.count} rating)</li>
          </ul>
        </div>
      </div>
      <p>{props.product?.description}</p>
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
        <button
          style={
            productExist
              ? {
                  pointerEvents: "none",
                }
              : null
          }
          disabled={productExist}
          className="btn_primary cart_bg"
          onClick={() => addToCartHandler(props.product?.id)}
        >
          add to cart
          <span className="cart">
            <FiShoppingCart />
          </span>
        </button>
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

ProductDetails.propTypes = {
  props: PropTypes.object,
};

export default ProductDetails;
