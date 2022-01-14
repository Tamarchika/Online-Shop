import Slider from "react-slick";
import "../../../style/components/_carousel.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../style/layout/_grid.scss";
import Card from "../../../components/reusable_components/Card";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        <div className="slider_item">
          <Card src="https://demo.echotemplate.com/olog-ecommerce-responsive-html-template/dist/images/product/01.jpg" />
        </div>
        <div className="slider_item">
          <Card src="https://demo.echotemplate.com/olog-ecommerce-responsive-html-template/dist/images/product/01.jpg" />
        </div>
        <div className="slider_item">
          <Card src="https://demo.echotemplate.com/olog-ecommerce-responsive-html-template/dist/images/product/01.jpg" />
        </div>
        <div className="slider_item">
          <Card src="https://demo.echotemplate.com/olog-ecommerce-responsive-html-template/dist/images/product/01.jpg" />
        </div>
        <div className="slider_item">
          <Card src="https://demo.echotemplate.com/olog-ecommerce-responsive-html-template/dist/images/product/01.jpg" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
