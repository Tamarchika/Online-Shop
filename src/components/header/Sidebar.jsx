import { Link, useNavigate } from "react-router-dom";

import SearchInput from "./Search";
import Dropdown from "react-dropdown";
import ROUTERS from "../../constants/router_constants";

const defaultOption = "Category";

const Sidebar = ({ categories, closeMenu }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="sidenav">
        <div className="search_bar">
          <SearchInput />
        </div>
        <li className="navbar_ul_li">
          <Link to={ROUTERS.HOME} className="nav_link" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li className="navbar_ul_li">
          <Dropdown
            options={
              categories.length &&
              categories.map((el) => {
                return el[0].toUpperCase() + el.substring(1);
              })
            }
            value={defaultOption}
            placeholder="Category"
            onChange={(e) => {
              navigate(`/category/${e.value.toLowerCase()}`, {
                replace: true,
              });
              closeMenu();
            }}
          />
        </li>
      </div>
    </>
  );
};

export default Sidebar;
