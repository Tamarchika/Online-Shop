import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
const AvtorSocLink = () => {
  return (
    <div className="avtor_social_links">
      <div className="copy_right">
        <span id="copy">
          <span>
            <FontAwesomeIcon icon={faCopyright} />
          </span>
          2020. Design and Developed by
        </span>
        <span id="avtor"> Zakir Soft</span>
      </div>
      <div className="social_links">
        <div className="facebook">
          <FontAwesomeIcon icon={faFacebookF} />
        </div>
        <div className="twiter">
          <FontAwesomeIcon icon={faTwitter} />
        </div>
        <div className="youtube">
          <FontAwesomeIcon icon={faYoutube} />
        </div>
        <div className="instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </div>
    </div>
  );
};

export default AvtorSocLink;
