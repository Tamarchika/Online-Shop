import { Link } from "react-router-dom";
import ROUTERS from "../../../../constants/router_constants";
import "../../../../style/layout/_forms.scss";

const SigninForm = () => {
  return (
    <>
      <div className="signin_heading">
        <h5>Sign in</h5>
      </div>
      <form className="form">
        <div className="txt_field">
          <input type="text" required placeholder="" />
          <label>Username</label>
        </div>
        <div className="txt_field">
          <input type="password" required placeholder="" />
          <label>Password</label>
        </div>
        <div className="pass_show_forget">
          <div className="show_pass">
            <input type="checkbox" id="show_password" />
            <label for="show_password">Show Password</label>
          </div>
          <div className="forg_pass">
            <Link to={ROUTERS.FORGETPASS}>Forget Password</Link>
          </div>
        </div>
        <div className="submit_option">
          <Link to={`${ROUTERS.USER}/${ROUTERS.USERDASHBOARD}`}>
            <input type="submit" value="Sign in" />
          </Link>
        </div>
      </form>
    </>
  );
};

export default SigninForm;
