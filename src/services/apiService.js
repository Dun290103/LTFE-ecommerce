import axios from "../utils/axiosCustomize";

const getAllProducts = () => {
  return axios.get("api/products");
};

const getDataProduct = (id) => {
  return axios.get(`api/products/${id}`);
};

export { getAllProducts, getDataProduct };
