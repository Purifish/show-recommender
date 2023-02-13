import { useEffect, useState } from "react";

import s from "./style.module.css";
import TvShowApi from "./api/tv-show";
import { BACKDROP_BASE_URL } from "./config";
import TvShowDetail from "./components/TvShowDetail/TvShowDetail";
import Logo from "./components/Logo/Logo";
import TvShowList from "./components/TvShowList/TvShowList";
import SearchBar from "./components/SearchBar/SearchBar";

import logoImg from "./assets/images/logo.png";

function App() {

    const [curTvShow, setCurTvShow] = useState();
    const [recommendationList, setRecommendationList] = useState([]);

    async function fetchPopulars() {
        try {
            const popularShowsData = await TvShowApi.fetchPopulars();
            if (popularShowsData.length > 0) {
                setCurTvShow(popularShowsData[0]); // take the currently most popular show
            }
        } catch (err) {
            console.log("Error fetching popular tv show.");
        }
    }

    async function fetchRecommendations(tvShowId) {
        try {
            const recommendedShowsData = await TvShowApi.fetchRecommendations(tvShowId);
            if (recommendedShowsData.length > 0) {
                setRecommendationList(recommendedShowsData.slice(0, 10)); // take the first 10 recommended tv shows
            }
        } catch (err) {
            console.log("Error fetching recommendations.");
        }
        
    }

    async function fetchByTitle(title) {
        try {
            const searchResult = await TvShowApi.fetchByTitle(title);
            if (searchResult.length > 0) {
                setCurTvShow(searchResult[0]);
            } else {
                console.log("Problem detected when fetching search result");
            }
        } catch (err) {
            console.log("Error fetching search result");
        }
    }

    function updateCurrentShow(tvShow) {
        setCurTvShow(tvShow);
    }

    useEffect(() => {
        fetchPopulars();
    }, []);

    useEffect(() => {
        if (curTvShow) {
            fetchRecommendations(curTvShow.id);
        }
    }, [curTvShow]);

    return (
        <div 
            className={s.main_container}
            style={{
                background: curTvShow ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url("${BACKDROP_BASE_URL}${curTvShow.backdrop_path}") no-repeat center / cover`
                : "black"
            }} // background
        
        >
            <div className={s.header}>
                <div className="row"> 
                    {/*Bootstrap rows and columns*/}
                    <div className="col-4">
                        <Logo img={logoImg} title="BingeBuddy" subtitle="Find a show suited for you!"/>
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <SearchBar onSubmit={fetchByTitle}/>
                    </div>
                
                </div>
            </div>
            <div className={s.tv_show_detail}>
                {curTvShow && <TvShowDetail tvShow={curTvShow}/>}
            </div>
            <div className={s.recommended_tv_shows}>
                {recommendationList && <TvShowList onClickItem={updateCurrentShow} tvShows={recommendationList} />}
            </div>

        </div>

    );
}

export default App;