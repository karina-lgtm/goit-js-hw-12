import { fetchImages } from './js/pixabay-api.js';
import { createGalleryCardTemplate } from './js/render-functions.js';
import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.js-loader');
const loadMoreBtnEl = document.querySelector('.js-load-more-btn');

const perPage = 15;

const lightbox = new SimpleLightbox('.js-gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

let page = 1;
let searchedQuery = '';
let totalPages = 0;

const onSearchFormSubmit = async event => {
  try {
    event.preventDefault();

    searchedQuery = event.currentTarget.elements.user_query.value.trim();

    if (searchedQuery === '') {
      iziToast.show({
        title: 'Error:',
        message: 'Поле має бути заповнено!!',
        position: 'topRight',
      });
      return;
    }

    page = 1;

    loadMoreBtnEl.classList.add('is-hidden');

    loaderEl.classList.remove('hidden');

    const { data } = await fetchImages(searchedQuery, page, perPage);

    loaderEl.classList.add('hidden');

    if (data.hits.length === 0) {
      iziToast.show({
        title: 'Error:',
        message: `За вашим запитом нічого не знайдено!`,
        position: 'topRight',
      });

      galleryEl.innerHTML = '';
      searchFormEl.reset();
      return;
    }

    totalPages = Math.ceil(data.totalHits / perPage);

    if (totalPages > 1) {
      loadMoreBtnEl.classList.remove('is-hidden');
      loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);
    } else {
      iziToast.info({
        message: `Нажаль це всі результати за Вашим запитом: ${searchedQuery}`,
        position: 'topRight',
      });
    }

    const galleryTemplate = data.hits
      .map(el => createGalleryCardTemplate(el))
      .join('');

    galleryEl.innerHTML = galleryTemplate;
    searchFormEl.reset();

    lightbox.refresh();
  } catch (err) {
    loaderEl.classList.add('hidden');
    iziToast.show({
      title: 'Error',
      message: `Помилка: ${err.message}`,
      position: 'topRight',
    });
  }
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
const onLoadMoreBtnClick = async event => {
  try {
    page++;

    const { data } = await fetchImages(searchedQuery, page, perPage);

    const galleryTemplate = data.hits
      .map(el => createGalleryCardTemplate(el))
      .join('');

    galleryEl.insertAdjacentHTML('beforeend', galleryTemplate);

    lightbox.refresh();

    const firstCard = galleryEl.querySelector('.gallery-card');
    const cardHeight = firstCard.getBoundingClientRect().height;

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });

    if (page === totalPages) {
      loadMoreBtnEl.classList.add('is-hidden');
      loadMoreBtnEl.removeEventListener('click', onLoadMoreBtnClick);

      iziToast.info({
        message:
          'We are sorry, but you have reached the end of search results.',
        position: 'topRight',
      });
    }
  } catch (err) {
    iziToast.show({
      title: 'Error',
      message: `Помилка: ${err.message}`,
      position: 'topRight',
    });
  }
};
