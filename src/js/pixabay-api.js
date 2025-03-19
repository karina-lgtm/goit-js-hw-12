import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const API_KEY = "48859120-c5edc5c574d1328ed42f58f74";
const BASE_URL = "https://pixabay.com/api/";

export async function fetchImages(query, page = 1, perPage = 15) {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                key: API_KEY,
                q: query,
                image_type: "photo",
                orientation: "horizontal",
                safesearch: true,
                per_page: perPage,
                page,
            },
        });

        if (response.status !== 200) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const { hits, totalHits } = response.data;

        if (hits.length === 0) {
            iziToast.warning({
                title: "No results",
                message: "No images found. Try another search!",
            });
            return { hits: [], totalHits: 0 };
        }

        return { hits, totalHits };

    } catch (error) {
        iziToast.error({
            title: "Error",
            message: "Failed to fetch images. Try again!",
        });
        console.error("Fetch error:", error);
        return { hits: [], totalHits: 0 };
    }
}
