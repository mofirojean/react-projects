import {getImageUrl} from "../utils/image-url.utils.jsx";

export function Header() {
    return (
        <header className="navbar">
            <div className="navbar-logo">
                <img src={getImageUrl('Troll_face')} alt="meme-generator-logo" />
                <h3>Meme Generator</h3>
            </div>
            <h5>React Course</h5>
        </header>
    )
}
