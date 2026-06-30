import axios from "axios";

const API = axios.create({
  baseURL: "http://20.244.56.144/evaluation-service"
});

export default API;
