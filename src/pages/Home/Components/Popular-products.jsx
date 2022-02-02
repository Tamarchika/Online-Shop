import { useSelector } from "react-redux";
import Card from "../../../components/reusable_components/Card";
import Loader from "react-spinners/ClipLoader";



const PopularProducts = () => {
  const products = useSelector((store) => {
    return store.data.products;
  });
  const productsLoader = useSelector((store) => store.data);

  if (productsLoader.loading) {
    return (
      <div className="center">
        <Loader />
      </div>
    );
  }
  if (productsLoader.error) {
    return <div>{productsLoader.error}</div>;
  }
  return (
    <section className="popular_products">
      <div className="main_container">
        <div className="row">
          <div className="col-sm-12">
            <div className="section_title">
              <h2>Popular Products</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {products.map((el) => {
            return (
              <div className="col-md-4 col-sm-6" key={el.id}>
                <div className="product_item">
                  <Card
                    image={el.image}
                    title={el.title}
                    price={el.price}
                    id={el.id}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
