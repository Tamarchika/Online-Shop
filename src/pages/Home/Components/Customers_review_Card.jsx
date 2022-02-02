import PropTypes from "prop-types";

const CustomersReviewCard = ({ review, fullname, profession }) => {
  return (
    <div className="customers_review_card">
      <p>{review}</p>
      <div className="name">
        <h6>{fullname}</h6>
        <span>{profession}</span>
      </div>
    </div>
  );
};

CustomersReviewCard.propTypes = {
  review: PropTypes.string,
  fullname: PropTypes.string,
  profession: PropTypes.string,
};

export default CustomersReviewCard;
