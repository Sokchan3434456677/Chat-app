import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chat-app-rust-ten-63.vercel.app/api" : "/api",
  withCredentials: true,
});
