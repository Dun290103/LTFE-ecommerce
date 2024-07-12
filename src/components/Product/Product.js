import { useEffect, useState } from "react";
import ProductItems from "./ProductItems";
import React from "react";
import { Link } from "react-router-dom";

function Product() {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentCategory, setCurrentCategory] = useState('All'); // Khai báo state currentCategory để lưu category hiện tại
    const productsPerPage = 12;

    useEffect(() => {
        //lấy dữ liệu danh sách sản phẩm
        fetch("http://localhost:3080/api/products")
            .then((response) => response.json()).then(data => {
                setProducts(data);
                console.log(data);
            }
            );
        //lấy dữ liệu danh sách phân loại
        fetch('http://localhost:3080/api/categories') // Gọi API để lấy danh sách category
            .then(response => response.json())
            .then(data => {
                setCategories(data);
                console.log(data);
            });
    }, []);
    //xử lý sự kiện thay đổi id phân loại
    const handleCategoryChange = (categoryId) => {
        setCurrentCategory(categoryId);
        setCurrentPage(1); // Reset lại trang hiện tại khi thay đổi category
    };
    //lọc sản phẩm theo phân loại
    const filteredProducts = currentCategory === 'All'
        ? products
        : products.filter(product => product.categoryId === currentCategory);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    let pageNumb;
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        pageNumb = pageNumber;

    };

    return (
        <div className="App">      
            <h1 className="thisIsHOne">Product</h1>
            <hr/>
            <div className="mb-3">
                <label htmlFor="categorySelect" className="form-label">Filter by Category:</label>
                <select
                    id="categorySelect"
                    className="form-select"
                    onChange={(e) => handleCategoryChange(e.target.value)}
                >
                    <option value="All">All</option>
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="product-grid">
                {
                    currentProducts.map(product => (

                        <Link key={product.id} to={`/product/${product.id}`}>
                            <li key={product.id} className="product-item"  >
                                <h2 className="fw-lighter fs-7">{product.name}</h2>
                                <p className="fw-bold fs-8">${product.price}</p>
                                <p>{categories.find(cat => cat.id === product.categoryId)?.name || 'Unknown'}</p>

                            </li>
                        </Link>
                    ))
                }
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