import React, { useEffect, useState } from "react";
import axios from "axios";
import { getChats } from "../apis/chats";
import { Link } from "react-router-dom";

const Chat = () => {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    try {
      const { data } = await getChats();
      setChats(data.chats);
      console.log({ data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      <div>
        <Link to={"/"}>To Home</Link>
        <br />
        <hr />
      </div>
      <ul>
        {chats?.map((ch) => (
          <li>
            <Link to={`/chats/${ch._id}`}>{ch.chatName}</Link>
          </li>
        ))}
      </ul>
      {/* {JSON.stringify(chats, null, 4)} */}
    </div>
  );
};

export default Chat;
