import { useState, useEffect } from "react";
import AddMessage from "./components/AddMessage";
import AddFriend from "./components/AddFriend";
import FriendCardList from "./components/FriendCardList";
import MessageCardList from "./components/MessageCardList";
import NavBar from "./components/Navbar";
import ModalLogin from "./components/ModalLogin/ModalLogin";
import Mycontacts from './components/Mycontacts';
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const [isRenderedList, setRenderedList] = useState(false);
  const [friendList, setFriendList] = useState(false);
  const [filteredList, setFilteredList] = useState("");
  const [isLogin, setLogin] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("username")) {
      setLogin(false);
    }
  }, []);



  return (
    <div className="App">
      {isLogin ? (
        <ModalLogin onHandleClick={setLogin} />
      ) : (
        <>
          <NavBar onLogOutClick={setLogin} />
          <input
            className="filterInput"
            placeholder="find message by sender..."
            onChange={(event) => {
              setFilteredList(event.target.value);
            }}
          ></input>
          <div className="main__Content">
            <div className="App__friends">
              <h3>My friend list</h3>{" "}
              <AddFriend friendList={friendList} onAddFriend={setFriendList} />
              <FriendCardList
                friendList={friendList}
                setFriendList={setFriendList}
              />
            </div>
            <div className="App_messages">
              <h3>Messagges</h3>
              <AddMessage
                isRenderedList={isRenderedList}
                onAddButton={setRenderedList}
              />

              <MessageCardList
                isRenderedList={isRenderedList}
                setRenderedList={setRenderedList}
                filteredList={filteredList}
              />
            </div>
            
          </div>
<Mycontacts/>
          <Footer/>
        </>
      )}
    </div>
  );
}
export default App;
