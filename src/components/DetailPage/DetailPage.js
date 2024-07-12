import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ProductInfor from "./ProductInfor";
import { CartContext } from "../Cart/CartContext";
import { getDataProduct } from "../../services/apiService";

const DetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { addToCart } = useContext(CartContext); // Lấy addToCart từ CartContext

  useEffect(() => {
    getProduct();
  }, [id]);

  const getProduct = async () => {
    const res = await getDataProduct(id);

    if (res && res.data) {
      setProduct(res.data);
    }
  };

  return (
    <div className="detail-page-title">
      <h1>YOUR CHOICE:</h1>
      <hr />
      {product && <ProductInfor product={product} addToCart={addToCart} />}
    </div>
  );
};

export default DetailPage;
