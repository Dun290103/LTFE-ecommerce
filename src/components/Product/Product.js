import { useEffect, useState } from "react";
import ProductItems from "./ProductItems";
import React from "react";

function Product() {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(2);
    const productsPerPage = 3;

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
            <ul>
                {
                    currentProducts.map(product => (
                        <li key={product.id} className="product-item">
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                            <p>{product.price}</p>
                        </li>
                    ))
                }
            </ul>
            <ProductItems
                productsPerPage={productsPerPage}
                totalProducts={products.length}
                paginate={paginate}
                num={pageNumb}
            />
        </div>
    );
}
export default Product;