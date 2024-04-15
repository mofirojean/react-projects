import phone from "../assets/phone-icon.png"
import mail from "../assets/mail-icon.png"

export default function Contact({ contact }) {
    let image = contact.image
    return (
        <div className="contact-card">
            <img src={getImageUrl(contact.image)}/>
            <h3>{contact.name}</h3>
            <div className="info-group">
                <img src={phone} alt="phone-icon"/>
                <p>{contact.phone}</p>
            </div>
            <div className="info-group">
                <img src={mail} alt="mail icon"/>
                <p>{contact.email}</p>
            </div>
        </div>
    )
}

function getImageUrl(name) {
    return new URL(`../assets/${name}.png`, import.meta.url).href
}
