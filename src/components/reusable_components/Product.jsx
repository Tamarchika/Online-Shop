import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getProduct } from "../../redux/actions";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../style/components/_product.scss";
import "../../style/layout/_grid.scss";
import { FaStar } from "react-icons/fa";

const Product = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  useEffect(() => {
    dispatch(getProduct(params.id));
  }, [dispatch, params.id]);

  const product = useSelector((store) => {
    return store.product.product;
  });
  console.log(product);

  return (
    <section className="product">
      <div className="main_container">
        <div className="row">
          <div className="col-lg-6 col-md-5 col-12">
            <div className="product_slider">
              <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
                <div className="slider_img">
                  <img src={product.image} alt="product" />
                </div>
              </Slider>
              <div className="slider_nav">
                <Slider
                  asNavFor={nav1}
                  ref={(slider2) => setNav2(slider2)}
                  slidesToShow={3}
                  swipeToSlide={true}
                  focusOnSelect={true}
                >
                  <span>
                    <img src={product.image} alt="product" />
                  </span>
                  <span>
                    <img src={product.image} alt="product" />
                  </span>
                  <span>
                    <img src={product.image} alt="product" />
                  </span>
                </Slider>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-5 col-12">
            <div className="product_pricelist">
              <h2>{product.title}</h2>
              <div className="product_pricelist_rating">
                <div className="price">
                  <span>${product.price}</span>
                  <del>${parseFloat(product.price + 39).toFixed(2)}</del>
                </div>
                <div className="star">
                  <ul>
                    <li><FaStar /></li>
                    <li><FaStar /></li>
                    <li><FaStar /></li>
                    <li><FaStar /></li>
                    <li><FaStar /></li>
                    <li>{}</li>
                    <li className="point">({} rating)</li>
                  </ul>
                </div>
              </div>
              <p>{product.description}</p>
              <div className="product_pricelist_selector">
                <div className="product_pricelist_selector_size">
                  <h6>Sizes</h6>
                  <div className="sizes" id="sizes">
                    <li className="sizes-all">S</li>
                    <li className="sizes-all active">M</li>
                    <li className="sizes-all">L</li>
                    <li className="sizes-all">XL</li>
                    <li className="sizes-all">XLL</li>
                  </div>
                </div>
                <div className="product_pricelist_selector_color">
                  <h6>Colors</h6>
                  <div className="colors" id="colors">
                    <li className="colorall color-1 active"></li>
                    <li className="colorall color-2"></li>
                  </div>
                </div>
                <div className="product_pricelist_selector_quantity"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
