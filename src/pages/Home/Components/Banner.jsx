import "../../../style/components/_banner.scss";
import "../../../style/components/_buttons.scss";

const Banner = () => {
  return (
    <section className="home_page_banner_area">
      <div className="main_container">
        <div className="align_items_center">
          <div className="home_page_banner_heading">
            <h1> Premium care for premium people</h1>
            <p>Not ready for a subscription? Shop all products</p>
            <a className="btn_primary" href="/">
              Shop Now
            </a>
          </div>
          <div className="home_page_banner_img">
            <img
              src="https://demo.echotemplate.com/olog-ecommerce-responsive-html-template/dist/images/banner.jpg"
              alt="Brand"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
