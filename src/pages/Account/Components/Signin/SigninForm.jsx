import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { Link, useNavigate } from "react-router-dom";
import ROUTERS from "../../../../constants/router_constants";

import { useDispatch } from "react-redux";

import axios from "axios";

import "../../../../style/layout/_forms.scss";
import { updateLoginStatus } from "../../../../redux/actions";

const SigninForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userExist, setUserExist] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (userData) => {
    try {
      const response = await axios.post(
        "https://fakestoreapi.com/auth/login",
        userData
      );
      dispatch(updateLoginStatus(true));
      navigate("/user/user-dashboard");
    } catch (error) {
      toast.error("User does not exist");
      setUserExist(false);
    }
  };
  return (
    <>
      <div className="signin_heading">
        <h5>Sign in</h5>
      </div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="txt_field">
          <input type="text" {...register("username", { required: true })} />
          <label>Username</label>
          {errors.username?.type === "required" && (
            <p className="required_error">Username is required</p>
          )}
        </div>
        <div className="txt_field">
          <input
            type={showPassword ? "text" : "password"}
            {...register("password", { required: true })}
          />
          <label>Password</label>
          {userExist ? null : (
            <p className="required_error">
              UserName or Password is Not Correct
            </p>
          )}
          {errors.password?.type === "required" && (
            <p className="required_error">Password is required</p>
          )}
        </div>
        <div className="pass_show_forget">
          <div className="show_pass">
            <input
              type="checkbox"
              id="show_password"
              onClick={() => setShowPassword(!showPassword)}
            />
            <label for="show_password">Show Password</label>
          </div>
          <div className="forg_pass">
            <Link to={ROUTERS.FORGETPASS}>Forget Password</Link>
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
