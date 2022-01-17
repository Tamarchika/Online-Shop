import { Link } from "react-router-dom";
import ROUTERS from "../../../../constants/router_constants";

const ChangePassword = () => {
  return (
    <>
      <div className="signin_heading">
        <h5>Change password</h5>
      </div>
      <form className="form">
        <div className="txt_field">
          <input type="password" required placeholder="" />
          <label>Currnet password</label>
        </div>
        <div className="txt_field">
          <input type="password" required placeholder="" />
          <label>New password</label>
        </div>
        <div className="txt_field">
          <input type="password" required placeholder="" />
          <label>Confirm password</label>
        </div>
        <div className="submit_option">
          <Link to={ROUTERS.USERDASHBOARD}>
            <input type="submit" value="Save changes" />
          </Link>
        </div>
      </form>
    </>
  );
};

export default ChangePassword;
