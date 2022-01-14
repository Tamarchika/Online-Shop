import { Link } from "react-router-dom";

const SignupForm = () => {
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
          <input type="text" required placeholder="" />
          <label>Username</label>
        </div>
        <div className="txt_field">
          <input type="password" required placeholder="" />
          <label>Password</label>
        </div>
        <div className="txt_field">
          <input type="text" required placeholder="" />
          <label>First Name</label>
        </div>
        <div className="txt_field">
          <input type="text" required placeholder="" />
          <label>Last Name</label>
        </div>
        <div className="txt_field">
          <input type="text" required placeholder="" />
          <label>Address (city)</label>
        </div>
        <div className="txt_field">
          <input type="phone" required placeholder="" />
          <label>Phone Number</label>
        </div>
        <div className="pass_show_forget">
          <div className="show_pass">
            <input type="checkbox" id="show_Uppassword" />
            <label for="show_Uppassword">Show Password</label>
          </div>
        </div>
        <div className="submit_option">
          <input type="submit" value="Sign in" />
        </div>
      </form>
    </>
  );
};

export default SignupForm;
