import React from "react";
import { PrettyChatWindow } from "react-chat-engine-pretty";
function ChatsPage(props) {
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId="b0480572-0431-47b8-b4dd-527af320b019"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100%" }}
      ></PrettyChatWindow>
    </div>
  );
}

export default ChatsPage;
