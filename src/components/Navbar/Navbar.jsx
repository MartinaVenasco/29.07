import "./index.css";
import logo from "../../logo.svg";
import { IconContext } from "react-icons/lib";
import { FaUserCircle } from "react-icons/fa";
import {RiLogoutCircleRLine} from "react-icons/ri"
const Navbar = ({ onLogOutClick }) => {
  const UserN = localStorage.getItem("username");

  const logOutU = () => {
    (<img className="logo" src={logo} alt="logo"></img>)(
      localStorage.removeItem("username")
    );
    onLogOutClick(true);
  };
  return (
    <IconContext.Provider
      value={{
        color: "orange",
        style: { width: "1.5em", height: "1.5em" },
        attr: { class: "usericon" },
      }}
    >
      <div className="Navbar">
        <img className="logo" src={logo} alt="logo"></img>

        <ul className="Navbar__list"> <FaUserCircle /> 
          <li>
            <a href="/">
             {UserN}
            </a>
          </li>
          <li className="logout">
            <a href="/" onClick={logOutU}>
           <RiLogoutCircleRLine/>
            </a>
          </li>
          
        </ul>
      </div>
    </IconContext.Provider>
  );
};

export default Navbar;
