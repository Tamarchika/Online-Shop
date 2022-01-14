import "../../../style/pages/_account.scss";
import Signin from "./Signin/Signin";
import Signup from "./Signup/Signup";

const AccountPage = () => {
  return (
    <div className="account_form_container">
      <div className="signin_container">
        <Signin />
      </div>
      <div className="signup_container">
        <Signup />
      </div>
    </div>
  );
};

export default AccountPage;
