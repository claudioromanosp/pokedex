import axios from "axios";

const api = axios.create({
  baseURL: "https://unpkg.com/pokemons@1.1.0/",
});

export default api;
