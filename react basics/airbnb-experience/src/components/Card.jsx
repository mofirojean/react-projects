import star from "../assets/star.png"
import {getImageUrl} from "../utils/image-url.utils.jsx";

export default function Card({ data }) {
    let badgeText;
    if (data.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else  if (data.location === "Online") {
        badgeText = 'ONLINE'
    }
    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img
                className="card-image"
                src={getImageUrl(data.coverImg)}
                alt={data.coverImg} />
            <div className="card-stats">
                <img src={star} className="card-star" alt="rating"/>
                <span>{data.stats.rating}</span>
                <span className="gray">({data.stats.reviewCount}) &#8226; </span>
                <span className="gray">{data.location}</span>
            </div>
            <h3>{data.title}</h3>
            <p><span className="bold">From ${data.price}</span> / person</p>
        </div>
    )
}
