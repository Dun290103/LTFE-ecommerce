import React from "react";
import { Link } from "react-router-dom";
import { TiArrowLeftThick } from "react-icons/ti";

const Cart = () => {
  return (
    <div className="container my-3 py-3">
      <h1 className="text-center">Cart</h1>
      <hr />
      <div className="row">
        <div className="col-md-12 py-5 bg-light text-center">
          <h4 className="p-3 display-5">Your Cart is Empty</h4>
          <Link to="/" className="btn  btn-outline-dark mx-4">
            <div style={{ display: "flex", alignItems: "center" }}>
              <TiArrowLeftThick style={{ marginRight: "5px" }} />
              Continue Shopping
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
