import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ProductInfor from './ProductInfor';
import { CartContext } from '../Cart/CartContext';


const DetailPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const { addToCart } = useContext(CartContext); // Lấy addToCart từ CartContext

    useEffect(() => {
        fetch(`http://localhost:3080/api/products/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setProduct(data);
            });
    }, [id]);

    return (
        <div className="detail-page-title">
            <h1>Sản phẩm</h1>
            {product && <ProductInfor product={product} addToCart={addToCart} />}
        </div>
    );
}

export default DetailPage;