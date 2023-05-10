import axios from "axios";
import { getURL } from "./config";

const API_URL = getURL();

export const getChats = async (token) => {
  return await axios.get(`${API_URL}/api/chat`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
  });
};

export const createGroupChat = async (data, token) => {
  return await axios.post(`${API_URL}/api/chat/group`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const renameGroupChat = async (data, token) => {
  return await axios.put(`${API_URL}/api/chat/group`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const addUserToGroupChat = async (data, token) => {
  return await axios.put(`${API_URL}/api/chat/group-add`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const removeUserFromGroupChat = async (data, token) => {
  return await axios.put(`${API_URL}/api/chat/group-remove`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
