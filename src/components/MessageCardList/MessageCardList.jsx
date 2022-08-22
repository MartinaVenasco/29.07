import { useState, useEffect, useRef } from "react";

import MessageCard from "../MessageCard";
import { GET } from "../../utils/api";
import "./index.css";

const MessageCardList = ({ isRenderedList, setRenderedList, filteredList }) => {
  const [messageList, setMessageList] = useState([]);
  const lastMessage = useRef(null);

  useEffect(() => {
    GET("messages")
      .then((data) => setMessageList(data))
      .then(() => {
        window.scroll({
          top: lastMessage.current,
          behavior: "smooth",
        });
      });
  }, [isRenderedList]);

  // console.log(messageList[messageList.length - 1])

  return (
    <div className="MessageCardList">
      {messageList.length ? (
        messageList
          .filter((el) => el.sender.toLowerCase().includes(filteredList))
          .map((message) => (
            <MessageCard
              myRef={lastMessage}
              textContent={message}
              isRenderedList={isRenderedList}
              onDeleteBtn={setRenderedList}
              key={message.id}
            />
          ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MessageCardList;
