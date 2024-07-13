import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TiArrowLeftThick } from "react-icons/ti";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const { getTotalPrice} = useContext(CartContext);//
  return (
    <div className="container my-3 py-3">
      <h1 className="text-center">Cart</h1>
      <hr />
      
      {cartItems.length === 0 ? (
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">Your Cart is Empty</h4>
            <Link to="/product" className="btn  btn-outline-dark mx-4">
              <div style={{ display: "flex", alignItems: "center" }}>
                <TiArrowLeftThick style={{ marginRight: "5px" }} />
                Continue Shopping
              </div>
            </Link>
          </div>
        </div>
        
      ) : (
        <div className="row">
          {cartItems.map(item => (
            <div key={item.id} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title" style={{color: "black"}}>{item.name}</h2>
                        <img
                    className="img-fluid "
                    src={item.image_url}
                    alt="item.name"
                    about="item.name"
                    width="250px"
                    height="250px"
                  />
                  <p className="card-text" style={{color: "black", fontWeight: "bold"}}>Price: ${item.price * item.quantity}</p>
                  <p className="card-text"style={{color: "black"}}>{item.description}</p>
                  <p style={{color: "black"}}>Quantity: {item.quantity}</p> {/* Hiển thị số lượng */}
                </div>
              </div>
            </div>
          ))}
        </div>
      
      )}
      <h2 style={{textAlign: "right"}}>Total Price: ${getTotalPrice()}</h2>
    </div>
  );
};

export default Cart;