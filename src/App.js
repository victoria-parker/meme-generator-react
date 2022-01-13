import React from "react";
import Header from "./components/Header"
import Meme from "./components/Meme"
import "./style.css"

export default function App(){
    return (
        <div className="container">
            <Header/>
            <Meme/> 
        </div>
    )
}