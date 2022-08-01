import "./index.css";
import logo from "../../logo.svg";
const Navbar = ({ onLogOutClick }) => {
  const UserN = localStorage.getItem("username")
  
  const logOutU = () => {<img className="logo" src={logo} alt="logo"></img>
    (
      localStorage.removeItem("username")
    );
    onLogOutClick(true);
  };
  return (
    <div className="Navbar">
      <img className="logo" src={logo} alt="logo"></img>

      <ul className="Navbar__list">
      
        <li>
          <a href="/">User: {UserN}</a>
        </li>
        <li>
          <a href="/" onClick={logOutU}>
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
