import {getImageUrl} from "../utils/image-url.utils.jsx";

/**
 * You can use Immer to mutate the state of a React object
 * syntax:
 *    @install: npm install use-immer
 *
 *    @import: import { useImmer } from 'use-immer'
 *
 *    @usage:
 *    const [person, updatePerson] = useImmer({
 *     name: 'Niki de Saint Phalle',
 *     artwork: {
 *       title: 'Blue Nana',
 *       city: 'Hamburg',
 *       image: 'https://i.imgur.com/Sd1AgUOm.jpg',
 *     }
 *   });
 *
 *   function handleNameChange(e) {
 *     updatePerson(draft => {
 *       draft.name = e.target.value;
 *     });
 *   }
 */

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
