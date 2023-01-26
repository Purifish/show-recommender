import s from "./style.module.css";

import TvShowListItem from "../TvShowListItem/TvShowListItem";

function TvShowList(props) {
    const { onClickItem, tvShows } = props;
    return (
        <div>
            <div className={s.title}>
                Recommended for you:
            </div>
            <div className={s.list}>
                {tvShows.map((tvShow) => {
                    return (
                        <span key={tvShow.id} className={s.tv_show_item}>
                            <TvShowListItem
                                tvShow={tvShow}
                                onClick={onClickItem}
                            />
                        </span>
                    );
                    
                })}
            </div>
        </div>
    );
}

export default TvShowList;