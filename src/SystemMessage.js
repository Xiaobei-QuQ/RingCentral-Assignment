import React from "react";

function SystemMessage(props) {
  const { message, username } = props;
  return (
    <div className="system">
      <span>{username}</span>
      &nbsp;
      {message}
    </div>
  );
}

export default SystemMessage;
