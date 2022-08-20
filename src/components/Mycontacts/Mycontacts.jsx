import "./index.css";
import { GETc } from "../../utils/api";
import FriendCard from "../FriendCard";
import { useState, useEffect } from "react";

const Mycontacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    GETc("users").then((data) => setContacts(data));
  }, [contacts]);

  return (
    <div className="contacts">
      <div className="contacts__List">
        {contacts.length ? (
          contacts.map((contact) => <FriendCard friendData={contact}  />)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};
export default Mycontacts;
