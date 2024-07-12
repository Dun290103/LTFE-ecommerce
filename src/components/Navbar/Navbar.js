import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { CartContext } from "../Cart/CartContext";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const {getCartCount} = useContext(CartContext);//thêm phương thức đếm số lượng sản phẩm trong giỏ hàng
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4 px-2 " to="/" >
           <div style={{ display: "flex", alignItems: "center", fontFamily: 'Sagite', }}>
            GULLVEIG
            </div>
        </NavLink>
        <Button
          variant="light"
          onClick={() => setOpen(!open)}
          aria-controls="navbarSupportedContent"
          aria-expanded={open}
          className="navbar-toggler"
        >
          <span className="navbar-toggler-icon"></span>
        </Button>

        <Collapse in={open}>
          <div className="navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto my-2 text-center">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/product">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons text-center">
              <NavLink to="/login" className="btn btn-outline-dark m-2">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FaSignInAlt style={{ marginRight: "5px" }} />
                  Login
                </div>
              </NavLink>
              <NavLink to="/register" className="btn btn-outline-dark m-2">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FaUserPlus style={{ marginRight: "5px" }} />
                  Register
                </div>
              </NavLink>
              <NavLink to="/cart" className="btn btn-outline-dark m-2">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FaShoppingCart style={{ marginRight: "5px" }} />
                  Cart ({getCartCount()})
                </div>
              </NavLink>
            </div>
          </div>
        </Collapse>
      </div>
    </nav>
  );
};

export default Navbar;
