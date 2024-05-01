import {useEffect, useState} from "react";

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    });
    const [allMemes, setAllMemes] = useState([])

    /*
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen below:
    */
    useEffect(() => {
        fetch(`https://api.imgflip.com/get_memes`)
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, []);

    function handleChange(event) {
        let {name, value} = event.target;
        setMeme(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });
    }

    function getMemeImage() {
        let random  = Math.floor(Math.random() * allMemes.length);
        setMeme(preMeme => ({...preMeme, randomImage: allMemes[random].url}))
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
