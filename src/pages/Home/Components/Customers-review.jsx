import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../style/layout/_grid.scss";
import CustomersReviewCard from "./Customers_review_Card";
import "../../../style/components/_customers_review.scss";

const CustomersReview = () => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <section className="customers_review">
      <div className="main_container">
        <div className="row">
          <div className="col-sm-12">
            <div className="section_title">
              <h2>What Do Our Customers Say...</h2>
            </div>
          </div>
        </div>
        <div className="customers_review_wrapper">
          <Slider {...settings}>
            <>
              <CustomersReviewCard
                review="It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout."
                fullname="Tyler Wood"
                profession="Fashion Designer"
              />
            </>
            <>
              <CustomersReviewCard
                review="It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout."
                fullname="Tyler Wood"
                profession="Fashion Designer"
              />
            </>
            <>
              <CustomersReviewCard
                review="It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout."
                fullname="Tyler Wood"
                profession="Fashion Designer"
              />
            </>
            <>
              <CustomersReviewCard
                review="It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout."
                fullname="Tyler Wood"
                profession="Fashion Designer"
              />
            </>
            <>
              <CustomersReviewCard
                review="It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout."
                fullname="Tyler Wood"
                profession="Fashion Designer"
              />
            </>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default CustomersReview;
