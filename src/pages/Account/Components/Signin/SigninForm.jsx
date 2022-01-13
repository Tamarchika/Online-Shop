import { Link } from "react-router-dom";
import "../../../../style/layout/_forms.scss";

const SigninForm = () => {
  return (
    <>
      <div className="signin_heading">
        <h5>Sign in</h5>
      </div>
      <form className="form">
        <div className="txt_field">
          <input type="email" required placeholder="" />
          <label>Email</label>
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
            <Link to={"*"}>Forget Password</Link>
          </div>
        </div>
        <div className="submit_option">
          <input type="submit" value="Sign in" />
        </div>
      </form>
    </>
  );
};

export default SigninForm;
