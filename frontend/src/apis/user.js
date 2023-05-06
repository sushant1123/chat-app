import axios from "axios";
import { getURL } from "./config";

const API_URL = getURL();

export const loginUser = async (data) => {
  return await axios.post(`${API_URL}/api/user/login`, data, {
    headers: {
      "Content-type": "application/json",
    },
  });
};

export const registerUser = async (data) => {
  return await axios.post(`${API_URL}/api/user/register`, data, {
    headers: {
      "Content-type": "application/json",
    },
  });
};
