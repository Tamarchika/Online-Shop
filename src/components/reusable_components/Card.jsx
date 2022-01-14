import PropTypes from "prop-types";
import "../../style/components/_carousel.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../style/layout/_grid.scss";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <img
          src={props.src}
          alt="products"
        />
      </div>
    </>
  );
};

Card.propTypes = {
    props: PropTypes.string
};

export default Card;
