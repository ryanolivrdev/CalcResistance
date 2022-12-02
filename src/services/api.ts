import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-calcresistance.up.railway.app/v1/resistor",
});
