import axios from "axios";

const instance = axios.create({
  baseURL: "https://json-server-handmade.onrender.com/",
});

export default instance;
