import { Link } from "react-router-dom";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";

const SigninOptions = () => {
  return (
    <div className="signin_options">
      <div className="or">
        <p>or sign in with</p>
      </div>
      <div className="social_link_options">
        <Link to={"*"} className="soc_link_option">
          <FaGoogle />
          <span>Google</span>
        </Link>
        <Link to={"*"} className="soc_link_option">
          <FaFacebookF />
          <span>Facebook</span>
        </Link>
        <Link to={"*"} className="soc_link_option">
          <FaTwitter />
          <span>Twitter</span>
        </Link>
      </div>
    </div>
  );
};

export default SigninOptions;
