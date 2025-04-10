import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://chat-app-lf6y.vercel.app",
  withCredentials: true, // Ensure cookies are sent with requests
});
