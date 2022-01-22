import React from "react";

export default function Meme(){

    const [meme,setMeme]=React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes,setAllMemes]=React.useState([])


    React.useEffect(function(){
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    },[])
 

    function handleChange(event){
        const {name,value}=event.target
        setMeme(prevMeme=>({
            ...prevMeme,
            [name] : value
        }))
    }

    function getMemeImage(){
        const randomNumber=Math.floor(Math.random()*allMemes.length)
        const url=allMemes[randomNumber].url
        setMeme(prevMeme=>({
            ...prevMeme,
            randomImage : url
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
                    
                    <button className="submit-btn" onClick={getMemeImage}>Get a new meme image 🖼</button>
                </div>
                <div className="meme">
                    <img src={meme.randomImage} className="meme-image" alt="memeImage"/>
                    <h2 className="meme-text top">{meme.topText}</h2>
                    <h2 className="meme-text bottom">{meme.bottomText}</h2>
                </div>
            </main>
    )
}