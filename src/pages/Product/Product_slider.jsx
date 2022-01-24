import { useState } from "react";
import Slider from "react-slick";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import "../../style/components/_product.scss";
import "../../style/layout/_grid.scss";
import "../../style/pages/_home.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductSlider = (props) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  return (
    <div className="product_slider">
      <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
        <div className="slider_img">
          <TransformWrapper initialScale={1}>
            {({ zoomIn, zoomOut, resetTransform }) => (
              <>
                <TransformComponent>
                  <img
                    src={props.image}
                    alt="product"
                    className="product_image"
                  />
                </TransformComponent>
                <div className="tools">
                  <button onClick={() => zoomIn()} className="btn_round">
                    Zoom In
                  </button>
                  <button onClick={() => zoomOut()} className="btn_round">
                    Zoom Out
                  </button>
                  <button
                    onClick={() => resetTransform()}
                    className="btn_round"
                  >
                    Reset
                  </button>
                </div>
              </>
            )}
          </TransformWrapper>
        </div>
      </Slider>
      <div className="slider_nav">
        <Slider
          asNavFor={nav1}
          ref={(slider2) => setNav2(slider2)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
          arrows={false}
        >
          <span>
            <img src={props.image} alt="product" />
          </span>
          <span>
            <img src={props.image} alt="product" />
          </span>
          <span>
            <img src={props.image} alt="product" />
          </span>
          <span>
            <img src={props.image} alt="product" />
          </span>
        </Slider>
      </div>
    </div>
  );
};

export default ProductSlider;
