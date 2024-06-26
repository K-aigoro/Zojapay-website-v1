// eslint-disable-next-line no-unused-vars
import React from "react";
import Logo from "../../assets/Image/zojapay.png";
import { BiMenuAltRight } from "react-icons/bi";
import "./navbar.css";

function Navbar() {
  return (
    <header>
      <div className="header">
        {/* Company logo */}
        <div className="logo">
          <a href="/"><img src={Logo} alt="Zojapay" /></a>
        </div>
        <div className="meun">
          <button className="nav__header">
            {" "}
            <BiMenuAltRight  size={24}/>
          </button>
        </div>

        {/* Features & FAQS */}
        <div className="nav">
          <ul className="list">
            <li>
              <a href="#features"> Features</a>
            </li>
            <li>
              <a href="#faqs"> FAQS </a>
            </li>
          </ul>
        </div>

        {/* Signup */}
        <div className="nav">
          <button className="button1">Sign up</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
