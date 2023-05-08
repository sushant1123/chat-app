import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [selectedChat, setSelectedChat] = useState({});
  const [chats, setChats] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);

    if (!userInfo) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <ChatContext.Provider
        value={{ user, setUser, selectedChat, setSelectedChat, chats, setChats }}
      >
        {children}
      </ChatContext.Provider>
      <Outlet />
    </>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;
