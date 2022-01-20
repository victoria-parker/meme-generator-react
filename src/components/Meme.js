import React from "react";

export default function Meme(){

    const [meme,setMeme]=React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    function handleChange(event){

        const {name,value}=event.target
        
        setMeme(prevMeme=>({
            ...prevMeme,
            [name] : value
        }))
    }
    return (
            <main>
                <div className="form-el">
                    <input 
                        type="text" 
                        className="form-input" 
                        placeholder="top text"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                    
                    <input 
                        type="text" 
                        className="form-input" 
                        placeholder="bottom text"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    /> 
                    
                    <button className="submit-btn">Get a new meme image 🖼</button>
                </div>
                <div>
                    <img src={meme.randomImage} className="meme-image" alt="memeImage"/>
                    <h2 className="meme-text top">Hello</h2>
                    <h2 className="meme-text bottom">Good bye</h2>
                </div>
            </main>
    )
}