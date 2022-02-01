/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProduct } from "./Product-API";
import Loader from "../../components/reusable_components/Loader";
import "../../style/components/_product.scss";
import "../../style/layout/_grid.scss";
import "../../style/pages/_home.scss";

import ProductSlider from "./Product_slider";
import ProductDetails from "./Product_details";
import Features from "../Home/Components/Features";
import { useDispatch } from "react-redux";
import { fetchData } from "../../redux/actions";

const Product = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  async function fetchDataAsync() {
    const productData = await getProduct(params.id);
    setProduct(productData);
  }

  useEffect(() => {
    dispatch(fetchData());
    fetchDataAsync();
  }, [params.id]);

  if (!product) {
    return (
      <div className="center loader">
        <Loader />
      </div>
    );
  }
  return (
    <>
      <section className="product">
        <div className="main_container">
          <div className="row">
            <div className="col-lg-6 col-md-5 col-12">
              <ProductSlider product={product} /> 
            </div>
            <div className="col-lg-6 col-md-5 col-12">
              <ProductDetails product={product} />
            </div>
          </div>
        </div>
        <Features />
      </section>
    </>
  );
};

export default Product;
