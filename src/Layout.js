import { Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./components/Home/Home";
import ContactPage from "./components/ContactPage/ContactPage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AboutPage from "./components/AboutPage/AboutPage";
import Cart from "./components/Cart/Cart";
import Products from "./components/Products/Products";
const Layout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="product" element={<Products />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
};

export default Layout;
