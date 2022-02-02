import PropTypes from "prop-types";
import "../../style/components/_carousel.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../style/layout/_grid.scss";
import "../../style/components/_card.scss";

import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ image, id, title, price }) => {
  return (
    <>
      <div className="card">
        <div
          className="product_item_image"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="shopping_cart">
            <FaShoppingCart />
          </div>
        </div>
        <div className="product_item_info">
          <Link to={`/category/product/${id}`} tabIndex="-1">
            {title}
          </Link>
          <span>${price}</span>
          <del>${parseFloat(price + 39).toFixed(2)}</del>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
};

export default Card;
