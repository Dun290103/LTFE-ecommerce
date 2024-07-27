import { useEffect, useState } from "react";
import queryString from "query-string";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../services/apiService";
import Pagination from "./Pagination";
import formatCurrency from "../../utils/formatCurrency";
import ProductFilters from "./ProductFilters";
import "./Product.scss";

function Product() {
  const [products, setProducts] = useState([]);
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

      if (res && res.data.length > 0) {
        setProducts(res.data);
        setPagination(res.pagination);
      }
    };
    fetchProductList();
  }, [filters]);

  const handlPageChange = (newPage) => {
    setFilters((prevFilters) => ({ ...prevFilters, _page: newPage }));
  };

  const handleFiltersChange = (newFilters) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  };

  return (
    <div className="product-container mx-auto">
      <h1 className="title">Products</h1>
      <hr />
      <div className="product-layout">
        <div className="sidebar">
          <ProductFilters filters={filters} onChange={handleFiltersChange} />
        </div>
        <div className="content">
          {products.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <li key={product.id} className="product-item">
                <img className="card-img-top" src={product.image_url} alt="Card" />
                <h2 className="productName fw-lighter fs-6 ">{product.name}</h2>
                <p className="productDes fw-bold fs-8">{formatCurrency(product.price)}</p>
                {/* <p>{categories.find((cat) => cat.id === product.categoryId)?.name || "Unknown"}</p> */}
              </li>
            </Link>
          ))}
          <Pagination pagination={pagination} onPageChange={handlPageChange} />
        </div>
      </div>
    </div>
  );
}
export default Product;
