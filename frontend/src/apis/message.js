import axios from "axios";
import { getURL } from "./config";

const API_URL = getURL();

export const postMessage = async (data, token) => {
  return await axios.post(`${API_URL}/api/message`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
  });
};

export const getAllMessages = async (chatId, token) => {
  return await axios.get(`${API_URL}/api/message/${chatId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
  });
};
