import Banner from "./Banner";
import Brands from "./Brands";
import Features from "./Features";
import About from "./About";
import "../../../style/pages/_home.scss";
import "../../../style/layout/_grid.scss";

const Home = () => {
  return (
    <main className="home_page_content">
      <Banner />
      <Brands />
      <Features />
      <About />
    </main>
  );
};

export default Home;
