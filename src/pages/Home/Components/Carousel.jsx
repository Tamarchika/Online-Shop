import Slider from "react-slick";
import "../../../style/components/_carousel.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../style/layout/_grid.scss";
import Card from "../../../components/reusable_components/Card";
import { useSelector } from "react-redux";

const Carousel = () => {
  const featuredData = useSelector((store) => {
    return store.data.products;
  });
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
        {featuredData.map((item) => {
          return (
            <div className="slider_item" key={item.id}>
              <Card image={item.image} title={item.title} price={item.price} id={item.id} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
