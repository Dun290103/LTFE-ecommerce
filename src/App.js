import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-container">
        <div className="app-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
