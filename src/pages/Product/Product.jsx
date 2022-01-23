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
import "../../style/pages/_home.scss";
import { FaClock, FaDollarSign, FaHeart, FaStar } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineLocalShipping } from "react-icons/md";
import Quantity from "./Quantity";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

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

  return (
    <>
      <section className="product">
        <div className="main_container">
          <div className="row">
            <div className="col-lg-6 col-md-5 col-12">
              <div className="product_slider">
                <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
                  <div className="slider_img">
                    <TransformWrapper initialScale={1}>
                      {({ zoomIn, zoomOut, resetTransform }) => (
                        <>
                          <TransformComponent>
                            <img src={product.image} alt="product" />
                          </TransformComponent>
                          <div className="tools">
                            <button
                              onClick={() => zoomIn()}
                              className="btn_round"
                            >
                              Zoom In
                            </button>
                            <button
                              onClick={() => zoomOut()}
                              className="btn_round"
                            >
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
                      <img src={product.image} alt="product" />
                    </span>
                    <span>
                      <img src={product.image} alt="product" />
                    </span>
                    <span>
                      <img src={product.image} alt="product" />
                    </span>
                    <span>
                      <img src={product.image} alt="" />
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
                      <li>
                        <FaStar />
                      </li>
                      <li>
                        <FaStar />
                      </li>
                      <li>
                        <FaStar />
                      </li>
                      <li>
                        <FaStar />
                      </li>
                      <li>
                        <FaStar />
                      </li>
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
                      <li className="sizes-all">XXL</li>
                    </div>
                  </div>
                  <div className="product_pricelist_selector_color">
                    <h6>Colors</h6>
                    <div className="colors" id="colors">
                      <li className="colorall color-1 active"></li>
                      <li className="colorall color-2"></li>
                    </div>
                  </div>
                  <div className="product_pricelist_selector_quantity">
                    <h6>Quantity</h6>
                    <Quantity />
                  </div>
                </div>
                <div className="product_pricelist_selector_button">
                  <a href="/" className="btn_primary cart_bg">
                    add to cart
                    <span className="cart">
                      <FiShoppingCart />
                    </span>
                  </a>
                  <a href="/" className="btn_primary  favorite_product">
                    <span>
                      <FaHeart />
                    </span>
                  </a>
                  <div className="product_pricelist_selector_button_item">
                    <div className="shipping">
                      <div className="icon">
                        <MdOutlineLocalShipping />
                      </div>
                      <p>Free Shipping Cast</p>
                    </div>
                    <div className="delivery">
                      <div className="icon">
                        <FaClock />
                      </div>
                      <p>3 Days Delivery Time</p>
                    </div>
                    <div className="cash">
                      <div className="icon">
                        <FaDollarSign />
                      </div>
                      <p>Cash on Delivery</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
