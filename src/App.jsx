import { useState, useEffect } from "react";
import AddMessage from "./components/AddMessage";
import AddFriend from "./components/AddFriend";
import FriendCardList from "./components/FriendCardList";
import MessageCardList from "./components/MessageCardList";
import NavBar from "./components/Navbar";
import ModalLogin from "./components/ModalLogin/ModalLogin";
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
            placeholder="cerca messaggi di..."
            onChange={(event) => {
              setFilteredList(event.target.value);
            }}
          ></input>
          <div className="main__Content">
            <div className="App__friends">
              <h3>Lista degli amici</h3>{" "}
              <AddFriend friendList={friendList} onAddFriend={setFriendList} />
              <FriendCardList
                friendList={friendList}
                setFriendList={setFriendList}
              />
            </div>
            <div className="App_messages">
              <h3>Messaggi</h3>
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
        </>
      )}
    </div>
  );
}
export default App;
