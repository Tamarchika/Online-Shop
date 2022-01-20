import { Link } from "react-router-dom";
import ROUTERS from "../../../../constants/router_constants";

const AccountSettings = () => {
  return (
    <>
      <div className="signin_heading">
        <h5>Account settings</h5>
      </div>
      <form className="form">
        <div className="txt_field">
          <input type="text" required placeholder="" />
          <label>Full Name</label>
        </div>
        <div className="txt_field">
          <input type="email" required placeholder="" />
          <label>Email</label>
        </div>

        <div className="submit_option">
          <Link to={`${ROUTERS.USER}/${ROUTERS.USERDASHBOARD}`}>
            <input type="submit" value="Save changes" />
          </Link>
        </div>
      </form>
    </>
  );
};

export default AccountSettings;
