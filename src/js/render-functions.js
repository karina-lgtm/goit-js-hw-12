import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import '../css/sl-custom.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import '../css/custom-easytoast.css';
import iconNoResults from '../img/icon-no-results.svg';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader-box')

export function renderImages(images) {
  const galleryHtml = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
          <li class="gallery-item">
            <a class="gallery-link" href="${largeImageURL}">
              <figure class="thumb-container">
                <img
                  class="thumb-image"
                  src="${webformatURL}"
                  data-source="${largeImageURL}"
                  alt="${tags}"
                />

                <figcaption class="thumb-data">
                  <dl class="thumb-data-list">
                    <div class="thumb-data-item">
                      <dt class="thumb-data-title">Likes</dt>
                      <dd class="thumb-data-data">${likes}</dd>
                    </div>
                    <div class="thumb-data-item">
                      <dt class="thumb-data-title">Views</dt>
                      <dd class="thumb-data-data">${views}</dd>
                    </div>
                    <div class="thumb-data-item">
                      <dt class="thumb-data-title">Comments</dt>
                      <dd class="thumb-data-data">${comments}</dd>
                    </div>
                    <div class="thumb-data-item">
                      <dt class="thumb-data-title">Downloads</dt>
                      <dd class="thumb-data-data">${downloads}</dd>
                    </div>
                  </dl>
                </figcaption>
              </figure>
            </a>
          </li>
        `
    )
    .join('');

  gallery.innerHTML = galleryHtml;
  lightbox.refresh();
  hideLoader()
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function showLoader(){
  gallery.classList.add('hidden')
  loader.classList.remove('hidden')
}

export function hideLoader(){
  gallery.classList.remove('hidden')
  loader.classList.add('hidden')
}

export function showMessage() {
  iziToast.show({
    position: 'topRight',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    messageSize: '16px',
    messageLineHeight: '24px',
    messageColor: 'white',
    iconUrl: iconNoResults,
    maxWidth: '432px',
    backgroundColor: '#EF4040',
  });
}
