import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/products')
            .then(response => response.json())
            .then(data => setProducts(data));
        // setProducts(productData);
    }, []);

    return (
        <div className="container">
            <div className="row">
                {products.map(product => (
                    <div className="col-md-4" key={product.id}>
                        <ProductItem product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
