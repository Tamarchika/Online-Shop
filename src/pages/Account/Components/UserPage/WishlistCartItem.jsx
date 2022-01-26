import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaGreaterThan, FaShoppingCart, FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../../../redux/actions";
import { toast } from "react-toastify";
const WishlistCartItem = ({ product }) => {
  const [productExist, setProductExist] = useState(false);
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const cartState = useSelector((store) => {
    return store.userCart.cart;
  });

  useEffect(() => {
    const productIds = cartState.map((prod) => prod.product.id);
    setProductExist(productIds.includes(product.id));
  }, [cartState]);

  const addToCart = async (id) => {
    try {
      // add new product in usercart state
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      dispatch(
        addProductToCart({
          product: data,
          qty,
        })
      );
    } catch (error) {
      toast.error("Product wasn't added");
    }
  };

  return (
    <div className="body">
      <div className="item">
        <div className="image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="name">
          <p> {product.title}</p>
          <div className="buttons">
            <div className="add_product">
              <button
                onClick={() => addToCart(product.id)}
                disabled={productExist}
                style={
                  productExist
                    ? {
                        pointerEvents: "none",
                        backgroundColor: "#1C6DD0",
                        opacity: "0.7",
                      }
                    : null
                }
              >
                {productExist ? "Added" : "Add to Cart"} <FaShoppingCart />
              </button>
            </div>
            <div className="remove_product">
              <button> Remove </button>
            </div>
          </div>
        </div>
        <div className="price">
          <span>${product.price}</span>
          <del>${(product.price + product.price * 0.2).toFixed(2)}</del>
        </div>
        <div className="rating">
          <p>
            <FaStar />
            {product.rating.rate}
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
