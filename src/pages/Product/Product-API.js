import axios from "axios";

export const getProduct = async (id) => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    const data = await response.data;
    return data;
  } catch (err) {
    return err;
  }
};
