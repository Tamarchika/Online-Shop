import Contact from "./Contact";
import Currency from "./Currency";
import Language from "./Language";
import "../../style/layout/_header.scss";

const HeaderTop = () => {
  return (
    <div className="header_top">
      <div className="main_container">
        <div className="row">
          <div className="col-sm-12">
            <div className="header_top_wrapper">
              <div className="contact">
                <Contact />
              </div>
              <div className="language_currency">
                <Language />|
                <Currency />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
