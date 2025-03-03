import fetchImages from './js/pickabay-api';
import { hideLoader, renderImages, showLoader, showMessage } from './js/render-functions';

const form = document.querySelector('form');
const input = document.querySelector('#search-text');

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const searchText = input.value;

  if (!searchText) return;

  input.value = '';

  showLoader()

  fetchImages(searchText)
    .then(data => handleSearchResults(data.data.hits))
    .catch(err => console.log(err));
}

function handleSearchResults(images) {
  if (!images.length) showMessage();

  renderImages(images);
}
