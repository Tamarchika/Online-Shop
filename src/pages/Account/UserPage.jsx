import { useEffect, useState } from "react";
import { useParams } from "react-router";

import UserPageHeader from "./Components/UserPage/UserPageHeader";
import UserPageNav from "./Components/UserPage/UserPageNav";
import UserDashboard from "./Components/UserPage/UserDashboard";

import Wishlist from "./Components/UserPage/Wishlist";
import Cart from "./Components/UserPage/Cart";
import ErrorPage from "../Error/ErrorPage";
import Billing from "./Components/UserPage/Billing";
import Order from "./Components/UserPage/Order";

import ROUTERS from "../../constants/router_constants";

import "../../style/pages/_account.scss";
import "../../style/pages/_user.scss";

const UserPage = () => {
  const [title, setTitle] = useState("");
  const { option } = useParams();

  const matches = ["user-dashboard", "billing", "order", "cart", "wishlist"];

  useEffect(() => {
    if (matches.includes(option)) {
      option === ROUTERS.USERDASHBOARD
        ? setTitle("Account")
        : setTitle(
            option
              .split("")
              .map((l, i) => (i === 0 ? l.toUpperCase() : l))
              .join("")
          );
    }
  }, [option]);
  return (
    <main>
      <section className="user_page_header">
        <UserPageHeader title={title} />
      </section>

      <section className="user_page_main">
        <UserPageNav />
        {option === ROUTERS.USERDASHBOARD ? (
          <UserDashboard />
        ) : option === ROUTERS.WISHLIST ? (
          <Wishlist />
        ) : option === ROUTERS.CART ? (
          <Cart />
        ) : option === ROUTERS.BILLING ? (
          <Billing />
        ) : option === ROUTERS.ORDER ? (
          <Order />
        ) : (
          <ErrorPage />
        )}
      </section>
    </main>
  );
};

export default UserPage;
