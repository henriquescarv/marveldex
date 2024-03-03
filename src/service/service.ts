import axios from "axios";

const service = axios.create({
  baseURL: "https://gateway.marvel.com:443/v1/public",
});

export default service;