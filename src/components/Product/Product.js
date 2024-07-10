import { useEffect, useState } from "react";
import ProductItems from "./ProductItems";
import React from "react";


function Product() {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(2);
    const productsPerPage = 12;

    useEffect(() => {
        fetch("http://localhost:3080/api/products")
        .then((response) => response.json()).then(data=>{
            setProducts(data);
            console.log(data);
        }
        );
    }, []);

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
            <div className="product-grid">
                {
                    currentProducts.map(product => (
                        <li key={product.id} className="product-item" href="!=">
                            <img src={product.image_url} alt={product.name} />
                            <h2 className="fw-lighter fs-10">{product.name}</h2>
                            <p className="fw-bold fs-8">${product.price}</p>                          
                        </li>
        
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