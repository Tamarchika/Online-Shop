import { Link } from "react-router-dom"
import ROUTERS from "../constants/router_constants"
import '../style/layout/_navigation.scss';
import Account from "./header/Account";
import SearchInput from "./header/Search";


const Nav = () => {
    return (
        <nav className="navbar">
            <ul className="navbar_ul">
                <h2 className="navbar_brand">
                    <Link to={ROUTERS.HOME} >ONLINE-SHOP</Link></h2>
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
                    <Link to={ROUTERS.CATEGORY} className="nav_link">
                        Category
                    </Link>
                </li>
                <li className="navbar_ul_li">
                    <Link to={ROUTERS.SALES} className="nav_link">
                        Sales
                    </Link>
                </li>
            </ul>
            <SearchInput />
            <Account />
        </nav>
    )
}


export default Nav;