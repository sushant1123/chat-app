import axios from "axios";
import { getURL } from "./config";

const API_URL = getURL();

export const getChats = async (token) => {
  return await axios.get(`${API_URL}/api/chat`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
