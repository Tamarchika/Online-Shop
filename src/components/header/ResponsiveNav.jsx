import Account from "./Account";
import { Link } from "react-router-dom";
import ROUTERS from "../../constants/router_constants";
import { slide as Menu } from "react-burger-menu";
import Sidebar from "./Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import "../../style/layout/_grid.scss";
import "../../style/components/_burgerMenu.scss";
import { useState } from "react";

const ResponsiveNav = ({ categories }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <>
      <div className="main_container">
        <div className="mobile_nav d-flex align_items_center">
          <div className="logo">
            <h2 className="navbar_brand">
              <Link to={ROUTERS.HOME}>ONLINE-SHOP</Link>
            </h2>
          </div>
          <div className="menu_icons">
            <Account />
          </div>
          <div className="hamburger_menu">
            <Menu
              right={true}
              width={350}
              customBurgerIcon={<GiHamburgerMenu />}
              customCrossIcon={<VscChromeClose />}
              noOverlay
              disableOverlayClick
              onStateChange={(state) => handleStateChange(state)}
              isOpen={menuOpen}
            >
              <Sidebar categories={categories} closeMenu={closeMenu} />
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponsiveNav;
