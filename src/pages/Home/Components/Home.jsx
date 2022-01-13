import '../../../style/pages/_home.scss';
import Banner from './Banner';

const Home = () => {
    return (
        <main className="home_page_content">
           <Banner />
           <div className='row'>
               <div className='col-sm-12'>
                   <div className='brand_area_image'>
                       <img src='https://demo.echotemplate.com/olog-ecommerce-responsive-html-template/dist/images/brand/02.png' alt='Brand'></img>
                   </div>
                   <div className='brand_area_image'>
                        <img src='https://demo.echotemplate.com/olog-ecommerce-responsive-html-template/dist/images/brand/03.png' alt='Brand'></img>
                   </div>
                   <div className='brand_area_image'>
                       <img src='https://demo.echotemplate.com/olog-ecommerce-responsive-html-template/dist/images/brand/04.png' alt='Brand'></img>
                   </div>
                   <div className='brand_area_image'>
                       <img src='https://demo.echotemplate.com/olog-ecommerce-responsive-html-template/dist/images/brand/05.png' alt='Brand'></img>
                   </div>
                   <div className='brand_area_image'>
                       <img src="https://demo.echotemplate.com/olog-ecommerce-responsive-html-template/dist/images/brand/01.png" alt="Brand" />
                   </div>
               </div>
           </div>
        </main>
    )
}

export default Home;