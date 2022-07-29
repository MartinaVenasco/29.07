import { useState, useEffect } from 'react'; 
import FriendCard from '../FriendCard';
import { GET, DELETE } from '../../utils/api';
import './index.css';

const FriendCardList = () => {
  const [friendList, setFriendList] = useState([]);

  useEffect(() => {
    GET('friends').then(data => setFriendList(data));
  }, [friendList]);

  

  return (
    <div className="FriendCardList">
      {
        friendList.length
          ? friendList.map(friend => <FriendCard friendData={friend}  deleteBtnFr={() =>
                DELETE('friends', friend.id).then(() => setFriendList(!friendList))
              } friendList={friendList} key={friend.id}/>)
          : <p>Loading...</p>
      }
    </div>
  )
}

export default FriendCardList;