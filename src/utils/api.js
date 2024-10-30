//Tüm api isteklerinde ortak olarak kullanılacak base url ve params'ları önceden ayarlı olduğu axios örneği

import axios from "axios";

console.log(import.meta.env.VITE_JWT_TOKEN);
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
  },
  params: {
    language: "tr-TR",
  },
});

export default api;
