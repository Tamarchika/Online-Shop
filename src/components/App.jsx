import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ROUTERS from "../constants/router_constants";
import Nav from "./Nav";
import Home from "../pages/Home/Components/Home";
import Men from "../pages/Men/Components/Men";
import Women from "../pages/Women/Components/Women";
import Shop from "../pages/Shop/Components/Shop";
import Category from "../pages/Category/Components/Category";
import HeaderTop from "./header/Header_Top";
import PrivateRoute from "../pages/Account/Components/PrivateRoute/PrivateRoute";
import AccountPage from "../pages/Account/AccountPage";
import ForgetPasswordPage from "../pages/Account/ForgetPasswordPage";
import UserPage from "../pages/Account/UserPage";
import ErrorPage from "../pages/Error/ErrorPage";

import Footer from "../components/footer/Footer";

import "../style/main.scss";

const history = createBrowserHistory();

const App = () => {
  return (
    <>
      <Router history={history}>
        <header>
          <HeaderTop />
          <Nav />
        </header>
        <main>
          <Routes>
            <Route path={ROUTERS.HOME} exact element={<Home />} />
            <Route path={ROUTERS.MEN} exact element={<Men />} />
            <Route path={ROUTERS.WOMEN} exact element={<Women />} />
            <Route path={ROUTERS.SHOP} exact element={<Shop />} />
            <Route path={ROUTERS.CATEGORY} exact element={<Category />} />
            <Route path={ROUTERS.ACCOUNT} exact element={<AccountPage />} />

            <Route
              path={ROUTERS.FORGETPASS}
              exact
              element={<ForgetPasswordPage />}
            />
            <Route path={`${ROUTERS.USER}/:option`} element={<PrivateRoute />}>
              <Route
                path={`${ROUTERS.USER}/:option`}
                exact
                element={<UserPage />}
              />
            </Route>

            <Route path={ROUTERS.ERROR} exact element={<ErrorPage />} />
          </Routes>
        </main>
      </Router>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default App;
