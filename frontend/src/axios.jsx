import axios from "axios";

const instance = axios.create({
  baseURL: "http://clutchmart.vercel.app",
});

export default instance;
