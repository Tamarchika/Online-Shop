import { Link } from "react-router-dom";
import ROUTERS from "../../constants/router_constants";
import "../../style/pages/_error.scss";

const ErrorPage = () => {
  return (
    <div className="error_container">
      <h1>404</h1>
      <h2>Page Was Not Found!</h2>
      <button className="error_btn">
        <Link to={ROUTERS.HOME}>Back To Home</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
