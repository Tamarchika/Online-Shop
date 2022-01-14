import { Link } from "react-router-dom";
import SigninOptions from "../Signin/SigninOptions";
import ROUTERS from "../../../../constants/router_constants";

const ForgetPassword = () => {
  return (
    <div className="forget_pass">
      <div className="signin_heading">
        <h5>Forget Password</h5>
      </div>
      <form className="form">
        <div className="txt_field">
          <input type="email" required placeholder="" />
          <label>Email</label>
        </div>
        <div className="submit_option">
          <input type="submit" value="Reset Password" />
        </div>
      </form>
      <SigninOptions />
      <div className="hr"></div>
      <div className="back_to_signup">
        Don't have account?{" "}
        <Link className="signup_link" to={ROUTERS.ACCOUNT}>
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default ForgetPassword;
