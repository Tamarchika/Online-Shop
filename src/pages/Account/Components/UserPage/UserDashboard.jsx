import AccountSettings from "./AccountSettings";
import ChangePassword from "./ChangePassword";

const UserDashboard = () => {
  return (
    <div className="dashboard_container">
      <div className="account_settings">
        <AccountSettings />
      </div>
      <div className="change_password">
        <ChangePassword />
      </div>
    </div>
  );
};

export default UserDashboard;
