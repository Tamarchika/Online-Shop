import axios from "axios";

export const getProduct = async (id) => {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  const data = await response.data;
  return data;
};
