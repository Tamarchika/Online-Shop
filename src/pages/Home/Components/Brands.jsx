import url from "../../../constants/url_constants";
import '../../../style/layout/_grid.scss';
import '../../../style/components/_brand.scss';

const Brands = () => {
  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="brand_area_image">
          <img
            src={url.brand1}
            alt="Brand"
          ></img>
        </div>
        <div className="brand_area_image">
          <img
            src={url.brand2}
            alt="Brand"
          ></img>
        </div>
        <div className="brand_area_image">
          <img
            src={url.brand3}
            alt="Brand"
          ></img>
        </div>
        <div className="brand_area_image">
          <img
            src={url.brand4}
            alt="Brand"
          ></img>
        </div>
        <div className="brand_area_image">
          <img
            src={url.brand5}
            alt="Brand"
          />
        </div>
      </div>
    </div>
  );
};

export default Brands;
