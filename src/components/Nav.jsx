import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryNames } from "../redux/actions";
import ROUTERS from "../constants/router_constants";
import Account from "./header/Account";
import SearchInput from "./header/Search";
import Dropdown from "react-dropdown";
import { FaHamburger } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import "react-dropdown/style.css";
import "../style/components/_dropdown.scss";
import "../style/layout/_navigation.scss";

const defaultOption = "Category";

const Nav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [stickyNav, setStickyNav] = useState("");
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 50 ? setStickyNav("fixed") : setStickyNav("");
    }
  };

  useEffect(() => {
    dispatch(getCategoryNames());
    window.addEventListener("scroll", stickNavbar);
    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, [dispatch]);

  const categoriesState = useSelector((store) => {
    return store.categories.categoryNames;
  });

  return (
    <div className={`header_bottom ${stickyNav}`}>
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
                <Dropdown
                  options={
                    categoriesState.length &&
                    categoriesState.map((el) => {
                      return el[0].toUpperCase() + el.substring(1);
                    })
                  }
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
        <aside className="d-lg-none">
          <div className="sidenav">
            <div className="close_mobile_menu">
              <span className="close_btn">
                <VscChromeClose />
              </span>
            </div>
            <div className="search_bar">
              <SearchInput />
            </div>
            <li className="navbar_ul_li">
              <Link to={ROUTERS.HOME} className="nav_link">
                Home
              </Link>
            </li>
            <li className="navbar_ul_li">
              <Dropdown
                options={
                  categoriesState.length &&
                  categoriesState.map((el) => {
                    return el[0].toUpperCase() + el.substring(1);
                  })
                }
                value={defaultOption}
                placeholder="Category"
                onChange={(e) => {
                  navigate(`/category/${e.value.toLowerCase()}`, {
                    replace: true,
                  });
                }}
              />
            </li>
          </div>
          <div className="mobile_nav d-flex align_items_center">
            <div className="logo">
              <h2 className="navbar_brand">
                <Link to={ROUTERS.HOME}>ONLINE-SHOP</Link>
              </h2>
            </div>
            <div className="search_bar">
              <SearchInput />
            </div>
            <div className="menu_icons">
              <Account />
            </div>
            <div className="hamburger_menu">
              <span>
                <FaHamburger />
              </span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Nav;
