import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true, // only if you use cookies (auth tokens)
});

export default API;