import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3080/api/products") // thay đổi URL phù hợp với server của bạn
      .then((response) => {
        console.log("Response:", response);
        return response.json();
      })
      .then((data) => {
        console.log("Data:", data);
        setData(data);
      })
      .catch((error) => {
        console.error("Có lỗi xảy ra khi lấy dữ liệu:", error);
      });
  }, []);

  return (
    <div>
      <h1>Danh sách Items</h1>
      <ul>
        {/* {data.map((item) => (
          <li key={item.id}>{item.name}</li> // Giả sử item có thuộc tính id và name
        ))} */}
      </ul>
    </div>
  );
};

export default App;
