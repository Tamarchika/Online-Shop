import Signin from "./Components/Signin/Signin";
import Signup from "./Components/Signup/Signup";

import "../../style/pages/_account.scss";

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
