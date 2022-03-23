import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";
// import db from "./firebase";
function SidebarChat({ id, name, addNewChat }) {
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter the room name");
    if (roomName) {
      // db.collection("rooms").add({
      //   name: roomName,
      // });
    }
  };
  return !addNewChat ? (
    <div className="sidebarChats">
      <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />
      <div className="sidebarChat__info">
        <h2>test</h2>
        <p>Last message...</p>
      </div>
    </div>
  ) : (
    <div className="sidebarChat" onClick={createChat}>
      <h2>Add new chat</h2>
    </div>
  );
}

export default SidebarChat;
