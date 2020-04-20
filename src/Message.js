import React from "react";

import TextMessage from "./TextMessage";
import ImageMessage from "./ImageMessage";
import SystemMessage from "./SystemMessage";

function Message(props) {
  const { isSelf, type, content, username } = props;

  function renderContent() {
    switch (type) {
      case "text": {
        return <TextMessage content={content} />;
      }
      case "image": {
        return <ImageMessage src={content} />;
      }
      default:
        return <div className="unknown">不支持的消息类型</div>;
    }
  }

  return (
    <>
      {type !== "system" ? (
        <div className={`message ${isSelf ? "self" : ""}`}>
          <div className="avatar" />
          <div className="right">
            <span className="username">{username}</span>
            <div className="contentButtonBlock">
              <div className="content">{renderContent()}</div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <SystemMessage message={content} username={username} />
        </>
      )}
    </>
  );
}

export default React.memo(Message);
