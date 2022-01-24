import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getProduct } from "../../redux/actions";

import "../../style/components/_product.scss";
import "../../style/layout/_grid.scss";
import "../../style/pages/_home.scss";

import ProductSlider from "./Product_slider";
import ProductDetails from "./Product_details";
import Features from "../Home/Components/Features";

const Product = () => {
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getProduct(params.id));
  }, [dispatch, params.id]);

  return (
    <>
      <section className="product">
        <div className="main_container">
          <div className="row">
            <div className="col-lg-6 col-md-5 col-12">
              <ProductSlider />
            </div>
            <div className="col-lg-6 col-md-5 col-12">
              <ProductDetails />
            </div>
          </div>
        </div>
        <Features />
      </section>
    </>
  );
};

export default Product;
