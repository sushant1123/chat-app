import React, { useEffect } from "react";
import axios from "axios";
import { getChats } from "../apis/chats";

const Chat = () => {
  const fetchChats = async () => {
    try {
      const { data } = await getChats();
      console.log({ data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return <div>Chat</div>;
};

export default Chat;
