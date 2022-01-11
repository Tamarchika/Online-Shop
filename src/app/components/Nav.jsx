import { Link } from "react-router-dom"
import ROUTERS from "../../constants/router_constants"



const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={ROUTERS.HOME} className="nav_link">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to={ROUTERS.MEN} className="nav_link">
                        Men
                    </Link>
                </li>
                <li>
                    <Link to={ROUTERS.WOMEN} className="nav_link">
                        Women
                    </Link>
                </li>
                <li>
                    <Link to={ROUTERS.SHOP} className="nav_link">
                        Shop
                    </Link>
                </li>
                <li>
                    <Link to={ROUTERS.CATEGORY} className="nav_link">
                        Category
                    </Link>
                </li>
                <li>
                    <Link to={ROUTERS.SALES} className="nav_link">
                        Sales
                    </Link>
                </li>
            </ul>
        </nav>
    )
}


export default Nav;