import { useEffect, useState } from "react";
import queryString from "query-string";
import { Link } from "react-router-dom";
import { getAllCategories, getAllProducts } from "../../services/apiService";
import Pagination from "./Pagination";
import formatCurrency from "../../utils/formatCurrency";

function Product() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("All");

  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 12,
    _totalRows: 1,
  });
  const [filters, setFilters] = useState({
    _limit: 12,
    _page: 1,
  });

  useEffect(() => {
    const fetchProductList = async () => {
      const paramsString = queryString.stringify(filters);
      const res = await getAllProducts(paramsString);
      console.log("check res: ", res);

      if (res && res.data.length > 0) {
        setProducts(res.data);
        setPagination(res.pagination);
      }
    };
    fetchProductList();
  }, [filters]);

  useEffect(() => {
    const fetchListCategories = async () => {
      const res = await getAllCategories();

      if (res && res.length > 0) {
        setCategories(res);
      }
    };
    fetchListCategories();
  }, []);

  const handlPageChange = (newPage) => {
    setFilters((prevFilters) => ({ ...prevFilters, _page: newPage }));
  };

  //xử lý sự kiện thay đổi id phân loại
  const handleCategoryChange = (categoryId) => {
    setCurrentCategory(categoryId);
  };

  return (
    <div className="App">
      <h1 className="text-center">Product</h1>
      <hr />
      <div className="mb-3">
        <label htmlFor="categorySelect" className="form-label">
          Filter by Category:
        </label>
        <select
          id="categorySelect"
          className="form-select"
          value={currentCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
        >
          <option value="All">All</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <li key={product.id} className="product-item">
              <img className="card-img-top" src={product.image_url} alt="Card" />
              <h2 className="productName fw-lighter fs-6 ">{product.name}</h2>
              <p className="productDes fw-bold fs-8">{formatCurrency(product.price)}</p>
              <p>{categories.find((cat) => cat.id === product.categoryId)?.name || "Unknown"}</p>
            </li>
          </Link>
        ))}
      </div>

      <Pagination pagination={pagination} onPageChange={handlPageChange} />
    </div>
  );
}
export default Product;
