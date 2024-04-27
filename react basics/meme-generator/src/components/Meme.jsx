import memedata from "../data/memedata.js";
import {useState} from "react";

export default function Meme() {
    let memes  = memedata.data.memes;
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    });

    function handleChange(event) {
        let {name, value} = event.target;
        console.log(meme)
        setMeme(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });
    }

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
                        name="topText"
                        placeholder="Shut up"
                        className="form-input"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-input-block">
                    <label htmlFor="bottom">Bottom text</label>
                    <input
                        type="text"
                        id="bottom"
                        name="bottomText"
                        placeholder="And take my money"
                        className="form-input"
                        onChange={handleChange}
                    />
                </div>
                <button onClick={getMemeImage} className="form-button">Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme-image" alt="meme-image"/>
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>

        </>
    )
}
