import star from "../assets/star.png"
import image from "../assets/katie-zeferes.png"

export default function Card(props) {
    return (
        <div className="card">
            <img
                className="card-image"
                src={image}
                alt="katie-zeferes" />
            <div className="card-stats">
                <img src={star} className="card-star" alt="rating"/>
                <span>5.0</span>
                <span className="gray">(6) &#8226; </span>
                <span className="gray">USA</span>
            </div>
            <h3>Life Lesson with Katie Zaferes</h3>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}
