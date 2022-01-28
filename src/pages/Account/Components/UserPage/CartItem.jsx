import { useState } from "react";
import { FaGreaterThan, FaRegHeart, FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteProductFromCart } from "../../../../redux/actions";

const CartItem = ({ data }) => {
  const [qty, setQty] = useState(data.qty);
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(deleteProductFromCart(id));
  };
  return (
    <div className="body">
      <div className="item">
        <div className="image">
          <img src={data.product.image} alt={data.product.title} />
        </div>
        <div className="name">
          <p> {data.product.title.split(" ").splice(0, 3).join(" ")}</p>
          <div className="buttons">
            <div className="add_product">
              <button>Checkout Now</button>
            </div>
            <div className="heart">
              <FaRegHeart />
            </div>
            <div className="remove_product">
              <button onClick={() => deleteHandler(data.product.id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
        <div className="price">
          <span>${data.product.price}</span>
          <del>
            ${(data.product.price + data.product.price * 0.2).toFixed(2)}
          </del>
        </div>
        <div className="rating">
          <p>
            <FaStar />
            {data.product.rating.rate}
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

export default CartItem;
