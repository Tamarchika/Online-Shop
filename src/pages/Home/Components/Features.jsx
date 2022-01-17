import "../../../style/components/_features.scss";
import Carousel from "./Carousel";

const Features = () => {
  return (
    <section className="features">
      <div className="main_container">
        <div className="row">
          <div className="col-sm-12">
            <div className="section_title">
              <h2>Featured Products</h2>
            </div>
          </div>
        </div>
        <div className="features_wrapper">
          <Carousel />
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="features_more_btn">
              <a className="btn_glass" href="/">
                View All Products
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
