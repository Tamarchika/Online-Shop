import PropTypes from "prop-types";
import "../../style/components/_carousel.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../style/layout/_grid.scss";
import "../../style/components/_card.scss";

import { FaShoppingCart } from "react-icons/fa";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <div
          className="product_item_image"
          style={{ backgroundImage: `url(${props.image})` }}
        >
          <div className="shopping_cart">
            <FaShoppingCart />
          </div>
        </div>
        <div className="product_item_info">
          <a href={`/category/product/${props.id}`} tabIndex="-1">
            {props.title}
          </a>
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
