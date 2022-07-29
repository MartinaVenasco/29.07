import { useState, useEffect } from 'react';

import MessageCard from '../MessageCard';
import { GET } from '../../utils/api';
import './index.css';

const MessageCardList = ({ isRenderedList, setRenderedList,  filteredList,
}) => {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    GET("messages").then((data) => setMessageList(data));
  }, [isRenderedList]);

  return (
    <div className="MessageCardList">
      {messageList.length ? (
        messageList
          .reverse().filter((el) => el.sender.toLowerCase().includes(filteredList))
          .map((message) => (
            <MessageCard
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