import { Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./components/Home/Home";

const Layout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default Layout;
