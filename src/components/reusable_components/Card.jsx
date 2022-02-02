import PropTypes from "prop-types";
import "../../style/components/_carousel.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../style/layout/_grid.scss";
import "../../style/components/_card.scss";

import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../redux/actions";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const Card = (props) => {
  const [productExist, setProductExist] = useState(false);

  const cartState = useSelector((store) => store.userCart.cart);

  useEffect(() => {
    const productIds = cartState.map((prod) => prod.product?.id);
    setProductExist(productIds.includes(props.id));
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
    <>
      <div className="card">
        <div
          className="product_item_image"
          style={{ backgroundImage: `url(${props.image})` }}
        >
          <div
            className="shopping_cart"
            style={productExist ? { pointerEvents: "none" } : null}
          >
            <FaShoppingCart onClick={() => addToCartHandler(props.id)} />
          </div>
        </div>
        <div className="product_item_info">
          <Link to={`/category/product/${props.id}`} tabIndex="-1">
            {props.title}
          </Link>
          <span>${props.price}</span>
          <del>${parseFloat(props.price + 39).toFixed(2)}</del>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  props: PropTypes.string,
};

export default Card;
