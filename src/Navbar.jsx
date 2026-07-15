import "./Navbar.css";
import logo from "./assets/logo.png";
import { FaUser } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar container">
      <div>
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <ul className="nav-links">
        <li><a href="#" className="nav-link">HOME</a></li>
        <li><a href="#" className="nav-link">PHOTOS & VIDEOS</a></li>
        <li><a href="#" className="nav-link">CATEGORIES</a></li>
        <li><a href="#" className="nav-link">USERS</a></li>
      </ul>

      <button className="login">
        <FaUser />
        &nbsp;Sign In / Up
      </button>
    </nav>
  );
}

export default Navbar;