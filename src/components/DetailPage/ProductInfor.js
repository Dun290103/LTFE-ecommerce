import React from "react";

const ProductInfor = ({ product }) => {
    return (
        <div className="App">
        <div className="product-detail">
            <div className="product-detail__image">
                <img src={product.image_url} alt={product.name} />
            </div>
            <div className="product-detail__info">
                <h2>{product.name}</h2>
                <p className="product-detail__description">{product.description}</p>
                <p className="product-detail__price">Price: ${product.price}</p>
                <button className="product-detail__button">ADD TO BAG</button>
            </div>
            
        </div>
        </div>
    );
}
export default ProductInfor;