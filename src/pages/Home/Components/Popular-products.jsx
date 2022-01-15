import React from "react";
import Card from "../../../components/reusable_components/Card";
import "../../../style/components/_popular-products.scss";

const PopularProducts = () => {
  return (
    <section className="popular_products">
      <div className="main_container">
        <div className="row">
          <div className="col-sm-12">
            <div className="section_title">
              <h2>Popular Products</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="product_item">
              <Card src="https://demo.echotemplate.com/olog-ecommerce-responsive-html-template/dist/images/product/06.jpg" />
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="product_item">
              <Card src="https://demo.echotemplate.com/olog-ecommerce-responsive-html-template/dist/images/product/07.jpg" />
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="product_item">
              <Card src="https://demo.echotemplate.com/olog-ecommerce-responsive-html-template/dist/images/product/08.jpg" />
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="product_item">
              <Card src="https://demo.echotemplate.com/olog-ecommerce-responsive-html-template/dist/images/product/02.jpg" />
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="product_item">
              <Card src="https://demo.echotemplate.com/olog-ecommerce-responsive-html-template/dist/images/product/01.jpg" />
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="product_item">
              <Card src="https://demo.echotemplate.com/olog-ecommerce-responsive-html-template/dist/images/product/02.jpg" />
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="product_item">
              <Card src="https://demo.echotemplate.com/olog-ecommerce-responsive-html-template/dist/images/product/01.jpg" />
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="product_item">
              <Card src="https://demo.echotemplate.com/olog-ecommerce-responsive-html-template/dist/images/product/02.jpg" />
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="product_item">
              <Card src="https://demo.echotemplate.com/olog-ecommerce-responsive-html-template/dist/images/product/01.jpg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
