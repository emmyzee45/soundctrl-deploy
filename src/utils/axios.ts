import axios from "axios";
// config
import { HOST_API } from "../config";

// ----------------------------------------------------------------------

export const makeRequest = axios.create({
  baseURL: "http://ec2-18-234-121-45.compute-1.amazonaws.com/api/",
  withCredentials: true,
}); 

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || "Something went wrong")
);

export default axiosInstance;
