import memedata from "../data/memedata.js";
import {useState} from "react";

export default function Meme() {
    let memes  = memedata.data.memes;
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

    function getMemeImage() {
        let random  = Math.floor(Math.random() * memes.length);
        setMeme(preMeme => ({...preMeme, randomImage: memes[random].url}))
    }

    return (
        <>
            <div className="form">
                <div className="form-input-block">
                    <label htmlFor="top">Top text</label>
                    <input
                        type="text"
                        id="top"
                        placeholder="Shut up"
                        className="form-input"/>
                </div>
                <div className="form-input-block">
                    <label htmlFor="bottom">Bottom text</label>
                    <input
                        type="text"
                        id="bottom"
                        placeholder="And take my money"
                        className="form-input"/>
                </div>
                <button onClick={getMemeImage} className="form-button">Get a new meme image 🖼</button>
            </div>
            <img src={meme.randomImage} className="meme-image" alt="meme-image"/>
        </>
    )
}
