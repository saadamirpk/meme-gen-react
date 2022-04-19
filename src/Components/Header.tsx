import React from "react";
import troll from "../Images/troll.svg";
import "../Css/header.css";

export default function Header() {
    return (
        <div className="flex-container">
            <img className="logoimg flex-item-start" src={troll} alt="logo" />
            <div className="flex-item-start title">Meme Generator</div>
            <div className="flex-item-end subtitle">
                Saad Amir
            </div>
        </div>
    );
}
