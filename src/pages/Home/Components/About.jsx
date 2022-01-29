import { FaCheckCircle } from "react-icons/fa";
import "../../../style/components/_about.scss";

const About = () => {
  return (
    <section className="about_area">
      <div className="main_container">
        <div className="about_area_content">
          <div className="align_items_center row">
            <div className="col-lg-6">
              <div className="about_area_content_img">
                <img
                  src="https://demo.echotemplate.com/olog-ecommerce-responsive-html-template/dist/images/feature/medicine.jpg"
                  alt="img"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about_area_content_text">
                <h3>Why Shop with Online-Shop</h3>
                <p>
                  Fortify your hair follicles, give thinning areas some volume,
                  and treat your body’s skin like driving your dream car off the
                  lot.
                </p>
                <div className="icon_area_content">
                  <div className="icon_area">
                    <FaCheckCircle />
                    <span>Secure Payment Method</span>
                  </div>
                  <div className="icon_area">
                    <FaCheckCircle />
                    <span>24/7 Customers Services.</span>
                  </div>
                  <div className="icon_area">
                    <FaCheckCircle />
                    <span>Shop in 2 languages</span>
                  </div>
                  <div className="icon_area">
                    <FaCheckCircle />
                    <span>Mauris congue eros in iaculis.</span>
                  </div>
                </div>
                <a className="btn_primary" href="/" onClick={(e) => e.preventDefault()}>
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
