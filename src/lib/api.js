// src/lib/api.js
import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000"

const api = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

// here we can add JWT token to headers if want


export async function apiRequest(method, url, data = {}, config = {}) {
  try {
    const response = await api({
      method,
      url,
      data,
      ...config,
    });

    return response.data;
  } catch (err) {
    console.error("API Error:", err.response?.data || err.message);
    throw new Error(err.response?.data?.message || "API Request Failed");
  }
}

// ============================
// Specific API Endpoints
// ============================

export const addAppointments = (data) => apiRequest("post", "/addAppointment", data);
export const getExperts = () => apiRequest("get", "/getExperts");
export const getHotels = () => apiRequest("get", "/getHotels");




