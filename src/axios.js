import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

console.log("Axios baseURL:", baseURL); // Debug line - remove later

export default axios.create({
  baseURL,
  withCredentials: true, // needed for sending cookies
});
