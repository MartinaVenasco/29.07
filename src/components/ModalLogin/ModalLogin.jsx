import Button from "../Button";
import { useState } from "react";
import "./index.css";
import users from '../../users.svg'
import logo from '../../logo.svg'

const ModalLogin = ({ onHandleClick }) => {
  const [usernameInput, setUsernameInput] = useState("");
  const [usernamePass, setUsernamePass] = useState("");
 
  const onGetUsername = () => {
    localStorage.setItem("username", usernameInput);
    localStorage.setItem("password", usernamePass);
    onHandleClick(false);
  };

  return (
    <div className="Modal-login_overlay">
        <form className="Modal-login" onSubmit={onGetUsername}>
        <img className="logoModal" src={logo} alt="logo"></img>
        <div className="anteprima-utente"><img className="userP" src={users} alt="users"></img></div>
          <h2 className="modal-text-login"> What's your name? </h2>
          <div className="login-form">
          <input
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value)}
            className="login-input"
            type="text"
            placeholder="Insert your name..."
            required
          />
            <input
            value={usernamePass}
            onChange={(e) => setUsernamePass(e.target.value)}
            className="login-input"
            type="password"
            placeholder="choose a password"
            required
          />
          <Button  className="Button--Login" type="submit" color="orange" btnTextContent="LOGIN!" /></div>
        </form>
      </div>

  );
};

export default ModalLogin;
