import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api/",
  //baseURL: "https://0975b77502be.ngrok.io/api",
  //baseURL: "https://a2d22414fa81.ngrok.io/api",
});

const publicRoutes = ["/auth/login", "/auth/register"];

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
