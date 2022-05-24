import React from "react";
import troll from "../Images/troll.svg";
import "../Css/header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex-container">
      <img className="logoimg flex-item-start" src={troll} alt="logo" />
      <div className="flex-item-start title">Meme Generator</div>
      <div className="flex-item-end subtitle">
        <ul>
          <li className="dropdown">
            <a href="javascript:void(0)" className="dropbtn">
              Other Pages <i className="arrow down"></i>
            </a>
            <div className="dropdown-content">
              <Link to={"/"}>Meme Generator</Link>
              <Link to="/form">SignUp Form</Link>
              <Link to="/box">Boxes</Link>
              <Link to="/counter">Counter</Link>
              <Link to="/object">Object Render</Link>
              <Link to="/array">Array Render</Link>
              <Link to="/greet">Greetings</Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
