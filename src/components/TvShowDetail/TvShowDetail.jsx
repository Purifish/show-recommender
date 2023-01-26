import s from "./style.module.css";
import StarRating from "../StarRating/StarRating";

function TvShowDetail({tvShow}) {
    const rating = tvShow.vote_average / 2;
    return (
        <div>
            <div className="title">{tvShow.name}</div>
            <div className={s.rating_container}>
                <StarRating rating={rating}/>
                <span className={s.rating}>{rating} / 5</span>
            </div>
            <div className="overview">{tvShow.overview}</div>

        </div>
    );
}

export default TvShowDetail;