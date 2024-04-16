import phone from "../assets/phone-icon.png"
import mail from "../assets/mail-icon.png"
import {getImageUrl} from "../utils/image-url.utils.jsx";

export default function Contact({ contact }) {
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

