import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ProductInfor = ({ product, addToCart }) => {
  //hiện thông báo thêm vào giỏ hàng thành công
  const handleAddToCart = () => {
    addToCart(product);
    toast.success("ADD TO BAG SUCESSFULLY! :3", { autoClose: 1000 });
  };
  return (
    <>
      <div className="container my-5 py-2">
        <div className="row">
          <div className="col-md-6 col-sm-12 py-3">
            <img
              className="img-fluid"
              src={product.image_url}
              alt={product.name}
              width="400px"
              height="400px"
            />
          </div>
          <div className="product-description col-md-6 col-md-6 py-5">
            <h1 className="display-5">{product.name}</h1>
            <h3 className="display-6  my-4">
              {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(
                product.price
              )}
            </h3>
            <p className="lead">{product.description}</p>
            <button className="btn btn-outline-dark" onClick={() => handleAddToCart()}>
              Add to Cart
            </button>
            <Link to="/cart" className="btn btn-dark mx-3">
              Go to Cart
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfor;
