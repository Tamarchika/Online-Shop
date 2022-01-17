import "../../../style/components/_customers_review.scss";

const CustomersReviewCard = (props) => {
  return (
    <div className="customers_review_card">
      <p>{props.review}</p>
      <div className="name">
        <h6>{props.fullname}</h6>
        <span>{props.profession}</span>
      </div>
    </div>
  );
};

export default CustomersReviewCard;
