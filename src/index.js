import React from "react";
import ReactDOM from "react-dom";
import Message from "./Message";
import "./styles.css";

const mock = [
  {
    username: "north",
    type: "text",
    content: "test"
  },
  {
    username: "south",
    type: "image",
    isSelf: true,
    content:
      "http://bimgs.plmeizi.com/images/bing/2020/OHR.VernalFalls_ZH-CN2664125316_1920x1080.jpg-listpic"
  },
  {
    username: "admin",
    type: "url",
    content: "邀请xx进入群聊"
  },
  {
    username: "admin",
    type: "system",
    content: "邀请xx进入群聊"
  }
];

function App() {
  return (
    <>
      {mock.map((item, index) => {
        return (
          <Message
            key={index}
            isSelf={item.isSelf}
            username={item.username}
            type={item.type}
            content={item.content}
          />
        );
      })}
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
