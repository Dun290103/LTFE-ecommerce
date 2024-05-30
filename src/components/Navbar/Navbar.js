import { NavLink } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">
          React Ecommerce
        </NavLink>
        <button
          className="navbar-toggler mx-2"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                <FaSignInAlt style={{ marginRight: "8px" }} />
                Login
              </div>
            </NavLink>
            <NavLink to="/register" className="btn btn-outline-dark m-2">
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaUserPlus style={{ marginRight: "8px" }} />
                Register
              </div>
            </NavLink>
            <NavLink to="/cart" className="btn btn-outline-dark m-2">
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaShoppingCart style={{ marginRight: "8px" }} />
                Cart (0)
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
