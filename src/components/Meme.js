import React from "react";

export default function Meme(){
    return (
            <main>
                <form className="form-el">
                    <input type="text" className="form-input" placeholder="top text"/>
                    <input type="text" className="form-input" placeholder="bottom text"/> 
                    <button className="submit-btn">Get a new meme image 🖼</button>
                </form>
            </main>
    )
}