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

export const getListOfUsers = async (searchData, token) => {
  return await axios.get(`${API_URL}/api/user?search=${searchData}`, {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getChat = async (userId, token) => {
  return await axios.post(
    `${API_URL}/api/chat`,
    { userId },
    {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
