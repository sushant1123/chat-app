import axios from "axios";
import { getURL } from "./config";

const API_URL = getURL();

export const getChats = async () => {
  return await axios.get(`${API_URL}/api/chat`);
};
