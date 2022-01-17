import Banner from "./Banner";
import Features from "./Features";
import About from "./About";
import "../../../style/pages/_home.scss";
import "../../../style/layout/_grid.scss";
import PopularProducts from "./Popular-products";
import Categories from "./Categories";
import CustomersReview from "./Customers-review";

const Home = () => {
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
