import Banner from "./Banner";
import Features from "./Features";
import About from "./About";
import PopularProducts from "./Popular-products";
import Categories from "./Categories";
import CustomersReview from "./Customers-review";
import "../../../style/pages/_home.scss";
import "../../../style/layout/_grid.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])
  
  return (
    <main className="home_page_content">
      <Banner />
      <Features />
      <About />
      <PopularProducts />
      <Categories />
      <CustomersReview />
    </main>
  );
};

export default Home;
