import { FaLocationDot } from "react-icons/fa6";

export default function Content (props) {
    return (
        <main>
            <img src={`../assets/${props.item.imageUrl}`} alt="" className="main-img" />
            <div>
                <div className="top">
                    <span className="main-location"><span className="icon-location"><FaLocationDot /></span>{props.item.location}</span>
                    <a href={props.item.googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>
                <h1 className="main-title">{props.item.title}</h1>
                <span className="main-date">{props.item.startDate} - </span>
                <span className="main-date">{props.item.endDate}</span>
                <p className="main-description">{props.item.description}</p>
            </div>
        </main>
    )
}