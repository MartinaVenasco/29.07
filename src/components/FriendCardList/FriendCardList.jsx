import { useState, useEffect } from 'react'; 
import FriendCard from '../FriendCard';
import { GET, DELETE } from '../../utils/api';
import './index.css';

const FriendCardList = () => {
  const [friendList, setFriendList] = useState([]);

  useEffect(() => {
    GET('friends').then(data => setFriendList(data));
  }, []);

  

  return (
    <div className="FriendCardList">
    <div className='FriendCardList__content'>
      {
        friendList.length
          ? friendList.map(friend => <FriendCard friendData={friend}  deleteBtnFr={() =>
                DELETE('friends', friend.id).then(() => setFriendList(!friendList))
              } friendList={friendList} key={friend.id}
              />)
          : <p>Loading...</p>
      }</div>
    </div>
  )
}

export default FriendCardList;