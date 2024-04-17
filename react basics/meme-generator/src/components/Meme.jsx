export default function Meme() {
    return (
        <>
            <form className="form">
                <div className="form-input-block">
                    <label htmlFor="top">Top text</label>
                    <input type="text" id="top" placeholder="Shut up" className="form-input"/>
                </div>
                <div className="form-input-block">
                    <label htmlFor="bottom">Bottom text</label>
                    <input type="text" id="bottom" placeholder="And take my money" className="form-input"/>
                </div>
                <button className="form-button">Get a new meme image 🖼</button>
            </form>
        </>
    )
}
