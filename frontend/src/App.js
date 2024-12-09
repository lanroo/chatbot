import React from "react";
import "../src/styles/App.css";
import QRCode from "./components/QRCode";
import ChatInterface from "./components/ChatInterface";

function App() {
  return (
    <div className="app-container">
      <div className="content-box">
        <QRCode />
        <ChatInterface />
      </div>
    </div>
  );
}

export default App;
