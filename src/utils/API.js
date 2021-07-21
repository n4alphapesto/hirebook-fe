import axios from "axios";
import { publicApiRoutes } from "./helpers";

const API = axios.create({
  baseURL: "http://localhost:3000/api/",
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (!publicApiRoutes.includes(config.url)) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;
