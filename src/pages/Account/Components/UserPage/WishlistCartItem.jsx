import { useState } from "react";
import { FaGreaterThan, FaShoppingCart, FaStar } from "react-icons/fa";
const WishlistCartItem = ({ product }) => {
  const [qty, setQty] = useState(product.qty);
  return (
    <div className="body">
      <div className="item">
        <div className="image">
          <img src={product.data.image} alt={product.data.title} />
        </div>
        <div className="name">
          <p> {product.data.title}</p>
          <div className="buttons">
            <div className="add_product">
              <button>
                Add to Cart <FaShoppingCart />
              </button>
            </div>
            <div className="remove_product">
              <button> Remove </button>
            </div>
          </div>
        </div>
        <div className="price">
          <span>{product.data.price}</span>
          <del>{product.data.price + 25.01}</del>
        </div>
        <div className="rating">
          <p>
            <FaStar />
            {product.data.rating.rate}
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
            <h6>Quantity</h6>
            <div className="counter">
              <div className="decreaser" onClick={() => setQty(qty - 1)}>
                <FaGreaterThan className="io" />
              </div>
              <input type="text" value={qty} min={1} />
              <div className="increaser" onClick={() => setQty(qty + 1)}>
                <FaGreaterThan />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistCartItem;
