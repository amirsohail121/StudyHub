// ChatBox.jsx
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { from: "tutor", text: "Hello! How can I help you?" },
    { from: "student", text: "I want to learn React." },
  ]);

  const [newMsg, setNewMsg] = useState("");

  const handleSend = () => {
    if (!newMsg.trim()) return;
    const updated = [...messages, { from: "student", text: newMsg }];
    setMessages(updated);
    setNewMsg("");
  };

  return (
    <div className="d-flex flex-column border rounded shadow-sm" style={{ height: "80vh", maxWidth: "100%", margin: "auto" }}>
      {/* Header */}
      <div className="bg-primary text-white p-3 rounded-top">
        <strong>Chat with Tutor</strong>
      </div>

      {/* Message List */}
      <div
        className="flex-grow-1 overflow-auto p-3"
        style={{ backgroundColor: "#f9f9f9" }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`d-flex mb-2 ${msg.from === "student" ? "justify-content-end" : "justify-content-start"}`}
          >
            <div
              className={`p-2 rounded ${msg.from === "student" ? "bg-primary text-white" : "bg-light"}`}
              style={{ maxWidth: "75%" }}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Box */}
      <div className="d-flex p-3 border-top">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Type a message..."
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button className="btn btn-primary" onClick={handleSend}>
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
