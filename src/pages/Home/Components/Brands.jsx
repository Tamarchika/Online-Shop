import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import url from "../../../constants/url_constants";

const Brands = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div>
        <div className="brand_area_image">
          <img src={url.brand1} alt="Brand"></img>
        </div>
      </div>
      <div>
        <div className="brand_area_image">
          <img src={url.brand2} alt="Brand"></img>
        </div>
      </div>
      <div>
        <div className="brand_area_image">
          <img src={url.brand3} alt="Brand"></img>
        </div>
      </div>
      <div>
        <div className="brand_area_image">
          <img src={url.brand4} alt="Brand"></img>
        </div>
      </div>
      <div>
        <div className="brand_area_image">
          <img src={url.brand5} alt="Brand" />
        </div>
      </div>
    </Slider>
  );
};

export default Brands;
