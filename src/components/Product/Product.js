import { useEffect, useState } from "react";
import ProductItems from "./ProductItems";
import React from "react";
import { Link } from "react-router-dom";

function Product() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCategory, setCurrentCategory] = useState("All"); // Khai báo state currentCategory để lưu category hiện tại
  const productsPerPage = 12;

  useEffect(() => {
    fetch("http://localhost:3080/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }, []);

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
    setCurrentPage(1); // Reset lại trang hiện tại khi thay đổi category
  };

  const filteredProducts =
    currentCategory === "All"
      ? products
      : products.filter((product) => product.category === currentCategory);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  let pageNumb;
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    pageNumb = pageNumber;
  };

  return (
    <div className="App">
      <h1 className="thisIsHOne">Product</h1>
      <h1 className="my-4">Product List</h1>
      <div className="mb-3">
        <label htmlFor="categorySelect" className="form-label">
          Filter by Category:
        </label>
        <select
          id="categorySelect"
          className="form-select"
          onChange={(e) => handleCategoryChange(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Category A">Category A</option>
          <option value="Category B">Category B</option>
        </select>
      </div>
      <div className="product-grid">
        {currentProducts.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <span />
            {product.name}
            <li key={product.id} className="product-item">
              <img width={150} height={150} src={product.image_url} alt={product.name} />
              <h2 className="fw-lighter fs-7">{product.name}</h2>
              <p className="fw-bold fs-8">${product.price}</p>
            </li>
          </Link>
        ))}
      </div>
      <ProductItems
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
        currentPage={currentPage}
        num={pageNumb}
      />
    </div>
  );
}
export default Product;
