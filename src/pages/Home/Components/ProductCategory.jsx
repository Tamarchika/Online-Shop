import PropTypes from "prop-types";

const ProductCategory = (props) => {
  return (
    <div className="product_category">
      <div className="product_category_img">
        <a href="/">
          <div
            className="product_img"
            style={{ backgroundImage: `url(${props.image})` }}
          ></div>
        </a>
      </div>
      <div className="product_category_text">
        <a href="/">
          <h6>{props.category}</h6>
          <span>{props.quantity}</span>
        </a>
      </div>
    </div>
  );
};

ProductCategory.propTypes = {
  props: PropTypes.string,
};

export default ProductCategory;
