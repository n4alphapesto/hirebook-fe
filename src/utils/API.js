import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api/",
});

const publicRoutes = ["/auth/login", "/auth/register", "/getUser", "/job"];

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (!publicRoutes.includes(config.url)) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;
