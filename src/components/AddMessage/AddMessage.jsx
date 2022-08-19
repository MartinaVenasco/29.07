import { useState } from "react";
import { POST } from "../../utils/api.js";
 

import Button from "../Button";
import "./index.css";

const AddMessage = ({ isRenderedList, onAddButton }) => {
  const [messageText, setMessageText] = useState("");


  const NewTime = () => {
    const hour = new Date().getHours();
    const minutes = new Date().getMinutes();
    const day = new Date().toLocaleDateString();
    return `${day.split("/").join(".")} ${hour}:${minutes}`;
  };
  const onFormSubmit = (e) => {
    e.preventDefault();

    if (messageText) {
      POST("messages", {
        text: messageText,
        sender: localStorage.getItem("username") || "Generic",
        date: NewTime(),
      }).then(() => {
        setMessageText("");
        onAddButton(!isRenderedList);
      });
    }
  };

  return (
    <form className="AddMessage" onSubmit={onFormSubmit}>
      <input
        className="AddMessage__text"
        type="text"
        placeholder="Type your message..."
        value={messageText}
    
        onChange={(e) => setMessageText(e.target.value)}
        required
      />
      <Button type="submit" btnTextContent="Invia" color="lightseagreen" className="addmessage" />
    </form>
  );
};

export default AddMessage;
