import SigninForm from "./SigninForm";
import SigninOptions from "./SigninOptions";
import "../../../../style/layout/_forms.scss";
const Signin = () => {
  return (
    <div className="signin">
      <SigninForm />
      <SigninOptions />
    </div>
  );
};

export default Signin;
