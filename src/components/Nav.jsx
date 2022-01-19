import { Link, useNavigate } from "react-router-dom";
import ROUTERS from "../constants/router_constants";
import Account from "./header/Account";
import SearchInput from "./header/Search";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "../style/components/_dropdown.scss";
import "../style/layout/_navigation.scss";

const options = [
  "Electronics",
  "Jewelery",
  "Men's clothing",
  "Women's clothing",
];

const defaultOption = "Category";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <div className="header_bottom">
      <div className="main_container">
        <div className="d-none d-lg-block">
          <nav className="navbar align-items-center d-flex">
            <h2 className="navbar_brand">
              <Link to={ROUTERS.HOME}>ONLINE-SHOP</Link>
            </h2>
            <ul className="navbar_ul align-items-center d-flex">
              <li className="navbar_ul_li">
                <Link to={ROUTERS.HOME} className="nav_link">
                  Home
                </Link>
              </li>
              <li className="navbar_ul_li">
                <Link to={ROUTERS.MEN} className="nav_link">
                  Men
                </Link>
              </li>
              <li className="navbar_ul_li">
                <Link to={ROUTERS.WOMEN} className="nav_link">
                  Women
                </Link>
              </li>
              <li className="navbar_ul_li">
                <Link to={ROUTERS.SHOP} className="nav_link">
                  Shop
                </Link>
              </li>
              <li className="navbar_ul_li">
                <Dropdown
                  options={options}
                  value={defaultOption}
                  placeholder="Category"
                  onChange={(e) => {
                    navigate(`/category/${e.value.toLowerCase()}`, {
                      replace: true,
                    });
                  }}
                />
              </li>
            </ul>
            <SearchInput />
            <Account />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Nav;
