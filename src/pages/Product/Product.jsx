import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProduct } from "./Product-API";

import "../../style/components/_product.scss";
import "../../style/layout/_grid.scss";
import "../../style/pages/_home.scss";

import ProductSlider from "./Product_slider";
import ProductDetails from "./Product_details";
import Features from "../Home/Components/Features";

const Product = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);
  async function fetchData() {
    const product = await getProduct(params.id);
    setProduct(product);
  }
  useEffect(() => {
    fetchData();
  });

  return (
    <>
      <section className="product">
        <div className="main_container">
          <div className="row">
            <div className="col-lg-6 col-md-5 col-12">
              <ProductSlider image={product?.image} />
            </div>
            <div className="col-lg-6 col-md-5 col-12">
              <ProductDetails
                title={product?.title}
                price={product?.price}
                description={product?.description}
                rating={product?.rating.rate}
                count={product?.count}
              />
            </div>
          </div>
        </div>
        <Features />
      </section>
    </>
  );
};

export default Product;
