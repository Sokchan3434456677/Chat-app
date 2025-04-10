import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://chat-app-henna-two-66.vercel.app",
  withCredentials: true, // Ensure cookies are sent with requests
});
