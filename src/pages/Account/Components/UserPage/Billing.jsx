import DropDown from "react-dropdown";

const countryOptions = ["United States", "Georgia"];
const stateOptions = ["Chicago"];
const defaultState = "States";
const defaultOption = "Country/Region";

const Billing = () => {
  return (
    <div className="billing_information">
      <div className="billing_container">
        <div className="signin_heading">
          <h5>Billing information</h5>
        </div>
        <form className="form">
          <div className="txt_field combined_txt_field">
            <div className="txt_field">
              <input type="text" required placeholder="" />
              <label>Full Name</label>
            </div>
            <div className="txt_field">
              <input type="text" required placeholder="" />
              <label>Last Name</label>
            </div>
          </div>
          <div className="txt_field">
            <input type="text" required placeholder="" />
            <label>Address</label>
          </div>
          <div className="txt_field">
            <input type="text" required placeholder="" />
            <label>Apartment, House</label>
          </div>
          <div className="txt_field">
            <input type="text" required placeholder="" />
            <label>City</label>
          </div>
          <div className="txt_field combined_txt_field ">
            <div className="txt_field">
              <DropDown
                className="dropdown"
                options={countryOptions}
                value={defaultOption}
                placeholder={defaultOption}
              />
            </div>
            <div className="txt_field">
              <DropDown
                className="dropdown"
                options={stateOptions}
                value={defaultState}
                placeholder={defaultState}
              />
            </div>
            <div className="txt_field">
              <input type="text" required placeholder="" />
              <label>Zip Code</label>
            </div>
          </div>
          <div className="txt_field">
            <input type="text" required placeholder="" />
            <label>Phone</label>
          </div>
          <div className="txt_field">
            <input type="text" required placeholder="" />
            <label>Email</label>
          </div>

          <div className="submit_option">
            <input type="submit" value="Save changes" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Billing;
