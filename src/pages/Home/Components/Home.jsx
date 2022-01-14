import Banner from './Banner';
import Brands from './Brands';
import Features from './Features';
import '../../../style/pages/_home.scss';
import '../../../style/layout/_grid.scss';

const Home = () => {
    return (
        <div className="main_container">
           <main className="home_page_content">
             <Banner />
             <Brands />
             <Features />
           </main>
        </div>
    )
}

export default Home;
