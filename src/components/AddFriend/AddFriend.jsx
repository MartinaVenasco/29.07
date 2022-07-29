import { useState } from 'react';
import { POST } from '../../utils/api.js';

import Button from '../Button';
import './index.css';

const AddFriend = ({ friendList, onAddFriend }) => {
  // Controlled component!!! - Forms e input
  const [friendName, setfriendName] = useState('');
  const [friendImg, setfriendImg] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (friendName && friendImg) {
      POST('friends', {
        name: friendName,
        photo: friendImg,
      })
      .then(() => {
        setfriendName('');
        setfriendImg('');
        onAddFriend(!friendList);
      })
    }
  }

  return (
    <form className="AddFriend" onSubmit={onFormSubmit}>
      <input
        className="AddFriend__name"
        type="text"
        placeholder="Name..."
        value={ friendName }
        onChange={(e) => setfriendName(e.target.value)}
        required
      />
      <input
        className="AddFriend__photo"
        type="text"
        placeholder="url-photo..."
        value={ friendImg }
        onChange={(e) => setfriendImg(e.target.value)}
        required
      /> 
       <Button type="submit" btnTextContent='Aggiungi' color='orange' />
    </form>
   
  )
}

export default AddFriend;