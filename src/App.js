import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

import React, { Component } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const onChangeUsername = e => setUsername(e.target.value);
  const onChangeMessage = e => setMessage(e.target.value);
  const onClick = () => {
    alert(username + " : " + message);
    setUsername("");
    setMessage("");
  };

  const onKeyPress = e => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        placeholder="사용자명"
        value={username}
        onChange={onChangeUsername}
      />

      <input
        type="text"
        placeholder="message"
        value={message}
        onChange={onChangeMessage}
        onKeyPress={onKeyPress}
      ></input>

      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default App;
