import React, { useEffect } from "react";
import { Avatar } from "@material-ui/core";
import "./Chat.css";
import { InsertEmoticon } from "@material-ui/icons";
import { Mic } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
function Chat() {
  const [input, setInput] = React.useState("");
  //   =============rendum number ====================
  const [seed, setSeed] = React.useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  //   ==============message sent================
  const sendMessage = (e) => {
    e.preventDefault();
    console.log("message sent", input);
    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar
          src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}
        />
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className={`chat__message ${true && "chat__reciever"}`}>
          Hey Guys <span className="message__time">3:45AM</span>
        </p>
      </div>
      <div className="chat__footer">
        <IconButton>
          <InsertEmoticon />
        </IconButton>
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type a message"
          />
          <button type="submit" onClick={sendMessage}>
            Send a message
          </button>
        </form>
        <IconButton>
          <Mic />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
