import axios from "axios";
import { BASE_URL, API_KEY_PARAM } from "../config";

class TvShowApi {

    // static so that instantiation is not needed
    static async fetchPopulars() {
        const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
        console.log(response.data);
        return response.data.results;
    }

    static async fetchRecommendations(tvShowId) {
        const response = await axios.get(`${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`);
        console.log(response.data);
        return response.data.results;
    }

    static async fetchByTitle(title) {
        const response = await axios.get(`${BASE_URL}search/tv/${API_KEY_PARAM}&query=${title}`);
        console.log(response.data);
        return response.data.results;
    }
}

export default TvShowApi;