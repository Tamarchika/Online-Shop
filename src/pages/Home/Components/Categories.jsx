import ProductCategory from "./ProductCategory";

const Categories = () => {
  return (
    <section className="categories">
      <div className="main_container">
        <div className="row">
          <div className="col-sm-12">
            <div className="section_title">
              <h2>Shop with top categories</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 col-6">
            <ProductCategory
              image="https://demo.echotemplate.com/olog-ecommerce-responsive-html-template/dist/images/categorys/tree%20dasher.jpg"
              category="Tree Dasher"
              quantity="480 Products"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-6">
            <ProductCategory
              image="https://demo.echotemplate.com/olog-ecommerce-responsive-html-template/dist/images/categorys/wool-shoe.jpg"
              category="Wool Runner Shoes"
              quantity="40 Products"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-6">
            <ProductCategory
              image="https://demo.echotemplate.com/olog-ecommerce-responsive-html-template/dist/images/categorys/wool-shoe.jpg"
              category="Jumper"
              quantity="50 Products"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-6">
            <ProductCategory
              image="https://demo.echotemplate.com/olog-ecommerce-responsive-html-template/dist/images/categorys/wool-shoe.jpg"
              category="Apple"
              quantity="45 Products"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-6">
            <ProductCategory
              image="https://demo.echotemplate.com/olog-ecommerce-responsive-html-template/dist/images/categorys/wool-shoe.jpg"
              category="Electronic"
              quantity="32 Products"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-6">
            <ProductCategory
              image="https://demo.echotemplate.com/olog-ecommerce-responsive-html-template/dist/images/categorys/wool-shoe.jpg"
              category="Drone"
              quantity="23 Products"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-6">
            <ProductCategory
              image="https://demo.echotemplate.com/olog-ecommerce-responsive-html-template/dist/images/categorys/wool-shoe.jpg"
              category="Headphone"
              quantity="14 Products"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-6">
            <ProductCategory
              image="https://demo.echotemplate.com/olog-ecommerce-responsive-html-template/dist/images/categorys/wool-shoe.jpg"
              category="Sunglasses"
              quantity="57 Products"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="features_more_btn">
              <a
                href="/"
                className="btn_glass"
                onClick={(e) => e.preventDefault()}
              >
                View All Categories
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
