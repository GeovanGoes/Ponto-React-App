import axios from "axios";

const api = axios.create({
  baseURL: "https://ponto-service.herokuapp.com",
});

export default api;