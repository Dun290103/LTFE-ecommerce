import { Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

const Layout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};

export default Layout;
