import { Outlet } from "react-router-dom";
import "./style/App.scss";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-container">
        <div className="app-content">
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
