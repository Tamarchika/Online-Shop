import '../../../style/pages/_home.scss';
import Banner from './Banner';
import Brands from './Brands';

const Home = () => {
    return (
        <main className="home_page_content">
           <Banner />
           <Brands />
        </main>
    )
}

export default Home;