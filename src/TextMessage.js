import React from "react";

function TextMessage(props) {
  const content = props.content;

  return (
    <div
      className="textMessage"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

export default TextMessage;
