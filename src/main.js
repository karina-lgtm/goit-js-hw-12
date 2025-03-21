import { fetchImages } from "./js/pixabay-api.js";
import { renderGallery } from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.addEventListener("DOMContentLoaded", () => {
  
    const form = document.querySelector(".form");
    const gallery = document.querySelector(".gallery");
    const loadMoreBtn = document.querySelector("#load-more");
    const loader = document.querySelector(".loader");

    
    if (!form || !gallery || !loadMoreBtn || !loader) {
        console.error("❌ Помилка: Один або більше елементів не знайдено.");
        console.log("🔍 Форма:", form);
        console.log("🔍 Галерея:", gallery);
        console.log("🔍 Кнопка 'Load More':", loadMoreBtn);
        console.log("🔍 Лоадер:", loader);
        return;
    }

    let query = "";
    let page = 1;
    const perPage = 40;

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        query = event.target.elements.searchQuery.value.trim();

        if (!query) {
            iziToast.warning({ title: "Warning", message: "Please enter a search term!" });
            return;
        }

        page = 1;
        gallery.innerHTML = "";
        loadMoreBtn.classList.add("hidden");
        loader.classList.remove("hidden");

        try {
            const { hits, totalHits } = await fetchImages(query, page, perPage);
            loader.classList.add("hidden");

            if (hits.length === 0) {
                iziToast.error({ message: "No images found. Try again!" });
                return;
            }

            renderGallery(hits);

            if (perPage < totalHits) {
                loadMoreBtn.classList.remove("hidden");
            }
        } catch (error) {
            loader.classList.add("hidden");
            iziToast.error({ message: "An error occurred. Please try again later!" });
        }
    });

    loadMoreBtn.addEventListener("click", async () => {
        page += 1;
        loader.classList.remove("hidden");

        try {
            const { hits, totalHits } = await fetchImages(query, page, perPage);
            loader.classList.add("hidden");

            if (hits.length === 0) return;

            renderGallery(hits, true);

            setTimeout(() => {
                const firstNewItem = document.querySelector(".gallery-item");
                if (firstNewItem) {
                    const { height: cardHeight } = firstNewItem.getBoundingClientRect();
                    window.scrollBy({ top: cardHeight * 2, behavior: "smooth" });
                }
            }, 300);

            if (page * perPage >= totalHits) {
                loadMoreBtn.classList.add("hidden");
                iziToast.info({ message: "We're sorry, but you've reached the end of search results." });
            }
        } catch (error) {
            loader.classList.add("hidden");
            iziToast.error({ message: "Failed to load more images. Try again!" });
        }
    });
});
