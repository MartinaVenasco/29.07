import Button from "../Button";
import { useState } from "react";
import "./index.css";

const ModalLogin = ({ onHandleClick }) => {
  const [usernameInput, setUsernameInput] = useState("");

  const onGetUsername = () => {
    localStorage.setItem("username", usernameInput);
    onHandleClick(false);
  };

  return (
    <div className="Modal-login_overlay">
        <form className="Modal-login" onSubmit={onGetUsername}>
          <h2>Come ti chiami?</h2>
          <input
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value)}
            className="login-input"
            type="text"
            placeholder="Inserisci il tuo nome..."
            required
          />
          <Button  className="Button--Login" type="submit" color="orange" btnTextContent="LOGIN!" />
        </form>
      </div>

  );
};

export default ModalLogin;
