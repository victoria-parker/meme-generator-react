import React from "react"
import troll from "../images/troll-face.png"

export default function Header(){
    return (
        <header>
            <nav className="nav-bar">
                <span className="logo"><img src={troll} alt="troll face"/><p>Meme Generator</p></span>
                <span>React Course - Project 3</span>
            </nav>
        </header>
    )
}