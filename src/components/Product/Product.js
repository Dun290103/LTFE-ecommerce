import { useEffect, useState } from "react";
import queryString from "query-string";
import { getAllProducts } from "../../services/apiService";
import Pagination from "./Pagination";
import ProductFilters from "./ProductFilters";
import "./Product.scss";
import ProductList from "./ProductList";

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
          <div className="list-product">
            <ProductList products={products} />
            <Pagination pagination={pagination} onPageChange={handlPageChange} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product;
