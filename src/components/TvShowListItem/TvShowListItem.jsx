import s from "./style.module.css";
import { SMALL_IMAGE_BASE_URL } from "../../config";

const MAX_TITLE_LENGTH = 20;

function TvShowListItem(props) {
    const { tvShow, onClick } = props;

    function onClick_() {
        onClick(tvShow);
    }

    return (
        <div onClick={onClick_} className={s.container}>
            <img 
                alt={tvShow.name} 
                src={SMALL_IMAGE_BASE_URL + tvShow.backdrop_path}
                className={s.img}
            />
            <div className={s.title}>{tvShow.name.length <= 20 ? tvShow.name : tvShow.name.slice(0, MAX_TITLE_LENGTH) + "..."}</div>
        </div>
    )
}

export default TvShowListItem;