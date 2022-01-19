import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import useGeolocation from "react-hook-geolocation";
import axios from "axios";
import { useState } from "react";

const SignupForm = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const navigate = useNavigate();
  const geolocation = useGeolocation();
  // Form Validator
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // Grab User Information And Send Post Request
  const onSubmit = async (data) => {
    const postData = {
      email: data.email,
      username: data.username,
      password: data.password,
      name: {
        firstname: data.firstname,
        lastname: data.lastname,
      },
      address: {
        city: data.city,
        street: data.street,
        number: data.number,
        zipcode: data.zipcode,
        geolocation: {
          lat: geolocation.error
            ? "Geolocation is not supported"
            : geolocation.latitude,
          long: geolocation.error
            ? "Geolocation is not supported"
            : geolocation.longitude,
        },
      },
      phone: data.phone,
    };
    try {
      const response = await axios.post(
        "https://fakestoreapi.com/users",
        postData
      );
      console.log(response.data);
      navigate("/user/user-dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="signin_heading">
        <h5>Sign up</h5>
      </div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="txt_field">
          <input type="email" {...register("email", { required: true })} />
          <label>Email</label>
          {errors.email?.type === "required" && (
            <p className="required_error">Email is required</p>
          )}
        </div>
        <div className="txt_field">
          <input
            type="text"
            {...register("username", { required: true, maxLength: 15 })}
          />
          <label>Username</label>
          {errors.username?.type === "required" ? (
            <p className="required_error">Username is required</p>
          ) : errors.username?.type === "maxLength" ? (
            <p className="required_error">
              Username should be less than 15 characters
            </p>
          ) : null}
        </div>
        <div className="txt_field">
          <input
            type={isShowPassword ? "text" : "password"}
            name="password"
            {...register("password", {
              required: true,
              minLength: 4,
              maxLength: 20,
            })}
          />
          <label>Password</label>
          {errors.password?.type === "required" ? (
            <p className="required_error">Password is required</p>
          ) : errors.password?.type === "minLength" ||
            errors.password?.type === "maxLength" ? (
            <p className="required_error">
              Password should be more than 4 characters and less than 15
            </p>
          ) : null}
        </div>
        <div className="txt_field">
          <input
            type="text"
            name="firstname"
            {...register("firstname", { required: true, maxLength: 15 })}
          />
          <label>First Name</label>
          {errors.firstname?.type === "required" ? (
            <p className="required_error">Firstname is required</p>
          ) : errors.firstname?.type === "maxLength" ? (
            <p className="required_error">
              Firstanem should be less than 15 characters
            </p>
          ) : null}
        </div>
        <div className="txt_field">
          <input
            type="text"
            name="lastname"
            {...register("lastname", { required: true, maxLength: 15 })}
          />
          <label>Last Name</label>
          {errors.lastname?.type === "required" && (
            <p className="required_error"> Lastname is required</p>
          )}
        </div>
        <div className="txt_field">
          <input
            type="text"
            name="city"
            {...register("city", { required: true, maxLength: 15 })}
          />
          <label>City</label>
          {errors.city?.type === "required" && (
            <p className="required_error"> City is required</p>
          )}
        </div>
        <div className="txt_field">
          <input
            type="text"
            name="street"
            {...register("street", { required: true, maxLength: 15 })}
          />
          <label>Street Name</label>
          {errors.street?.type === "required" && (
            <p className="required_error"> Street is required</p>
          )}
        </div>
        <div className="txt_field">
          <input
            type="text"
            name="number"
            {...register("number", { required: true, maxLength: 15 })}
          />
          <label>Street Number</label>
          {errors.number?.type === "required" && (
            <p className="required_error"> Number is required</p>
          )}
        </div>
        <div className="txt_field">
          <input
            type="text"
            name="zipcode"
            {...register("zipcode", { required: true, maxLength: 15 })}
          />
          <label>Zip Code</label>
          {errors.zipcode?.type === "required" && (
            <p className="required_error"> Zipcode is required</p>
          )}
        </div>
        <div className="txt_field">
          <input
            type="phone"
            name="phone"
            {...register("phone", { required: true, maxLength: 15 })}
          />
          <label>Phone Number</label>
          {errors.phone?.type === "required" && (
            <p className="required_error"> Phone number is required</p>
          )}
        </div>
        <div className="pass_show_forget">
          <div className="show_pass">
            <input
              type="checkbox"
              id="show_Uppassword"
              onClick={() => setIsShowPassword(!isShowPassword)}
            />
            <label>Show Password</label>
          </div>
        </div>
        <div className="submit_option">
          <input type="submit" value="Sign up" />
        </div>
      </form>
    </>
  );
};

export default SignupForm;
