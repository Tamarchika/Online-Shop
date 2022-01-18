import PropTypes from "prop-types";
import "../../style/components/_carousel.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../style/layout/_grid.scss";
import "../../style/components/_card.scss";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../../redux/actions";

import { FaShoppingCart } from "react-icons/fa";

const Card = (props) => {
 
  const dataState = useSelector((store) => {
    console.log(store)
  })
  return (
    <>
      <div className="card">
        <div className="product_item_image">
          <img src={props.src} alt="products" />
          <div className="shopping_cart">
            <FaShoppingCart />
          </div>
        </div>
        <div className="product_item_info">
          <a
            href="https://demo.echotemplate.com/olog-ecommerce-responsive-html-template/product-details.html"
            tabIndex="-1"
          >
            BERRY TYPE-II: C1N Backpack
          </a>
          <span>$975</span>
          <del>$999</del>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  props: PropTypes.string,
};

export default Card;
