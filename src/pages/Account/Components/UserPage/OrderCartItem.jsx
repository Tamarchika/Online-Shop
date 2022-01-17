import { FaGreaterThan, FaRegHeart, FaStar } from "react-icons/fa";

const OrderCartItem = () => {
  return (
    <div className="body">
      <div className="item">
        <div className="image">
          <img
            src="	https://demo.echotemplate.com/olog-ecommerce-responsive-html-template/dist/images/nike-shoe.jpg"
            alt=""
          />
        </div>
        <div className="name">
          <p> Skechers Men's Classic Fit-Delson-Camden Sneaker</p>
          <div className="buttons">
            <div className="add_product">
              <button>Checkout Now</button>
            </div>
            <div className="heart">
              <FaRegHeart />
            </div>
            <div className="remove_product">
              <button> Delete </button>
            </div>
          </div>
        </div>
        <div className="price">
          <span>$259.99</span>
          <del>$499.99</del>
        </div>
        <div className="rating">
          <p>
            <FaStar />
            5.0
          </p>
        </div>
        <div className="info">
          <div className="size_color">
            <div className="product_size">
              <h6>Sizes</h6>
              <div className="sizes">
                <li className="sizes_all active">M</li>
              </div>
            </div>
            <div className="product_color">
              <h6>Colors</h6>
              <div className="colors">
                <li className="active color_1"></li>
              </div>
            </div>
          </div>
          <div className="quantity">
            <h6>Pendding</h6>
            <div className="date_container">
              <ul>
                <li>
                  1<p>Day</p>
                </li>
                <li className="dotes">
                  19 <p>Hours</p>
                </li>
                <li className="dotes">
                  34 <p>Min</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCartItem;
