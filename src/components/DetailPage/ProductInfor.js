import React from "react";
import { toast } from "react-toastify";

const ProductInfor = ({ product, addToCart }) => {
    //hiện thông báo thêm vào giỏ hàng thành công
    const handleAddToCart = () => {
        addToCart(product);
        toast.success("ADD TO BAG SUCESSFULLY! :3", {autoClose:500});
    
    }
    return (
        <div className="App">
            <div className="product-detail">
                <div className="product-detail__image">
                    <img src={product.image_url} alt={product.name} />
                </div>
                <div className="product-detail__info">
                    <h2>{product.name}</h2>
                    <p className="product-detail__description" style={{ fontFamily: "Bodoni Moda, regular" }}>{product.description}</p>
                    <p className="product-detail__price" style={{ fontFamily: "Bodoni Moda, regular" }}>Price: ${product.price}</p>
                    <button
                        className="product-detail__button"
                        onClick={handleAddToCart} // Gọi addToCart khi nhấn nút
                    >
                        CHOOSE NOW!!!
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductInfor;
