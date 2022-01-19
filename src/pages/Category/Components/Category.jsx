import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Card from "../../../components/reusable_components/Card";
import { getCategories } from "../../../redux/actions";

const Category = () => {
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(getCategories(params.id));
  }, [dispatch, params.id]);

  const categoryState = useSelector((store) => {
    return store.category.categories;
  });
  return (
    <section className="category">
      <div className="main_container">
        <div className="row">
          <div className="col-sm-12">
            <div className="section_title">
              <h2>{params.id.toUpperCase()}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <>
            {categoryState.map((category) => {
              return (
                <div className="col-md-4 col-sm-6" key={category.id}>
                  <div className="product_item">
                    <Card
                      image={category.image}
                      price={category.price}
                      title={category.title}
                    />
                  </div>
                </div>
              );
            })}
          </>
        </div>
      </div>
    </section>
  );
};

export default Category;
