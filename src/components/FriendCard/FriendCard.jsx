import './index.css';


const FriendCard = ({ friendData, deleteBtnFr }) => {
  const { photo, name } = friendData;
  

  return (
    <div className="FriendCard" >

      <img className="FriendCard__photo" src={ photo } alt={ name } />
      <p className="FriendCard__name">{ name }</p><button  className="delete-friend" onClick={deleteBtnFr} >X</button>
    </div>
  )
}

export default FriendCard;