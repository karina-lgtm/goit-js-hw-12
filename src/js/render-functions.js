import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function imgTemplate({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) {
  return `<li class="gallery-item">
    <a class="gallery-link" href="${largeImageURL}">
      <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
    </a>
    <ul class="image-info">
      <li class="info-item"><p class="text">Likes</p><p class="text-value">${likes}</p></li>
      <li class="info-item"><p class="text">Views</p><p class="text-value">${views}</p></li>
      <li class="info-item"><p class="text">Comments</p><p class="text-value">${comments}</p></li>
      <li class="info-item"><p class="text">Downloads</p><p class="text-value">${downloads}</p></li>
    </ul>
  </li>`;
}

export function imgsTemplate(imgs) {
  return imgs.map(imgTemplate).join('');
}

export function renderGallery(refs, imgs) {
  refs.gallery.insertAdjacentHTML('beforeend', imgsTemplate(imgs));
  lightbox.refresh();
}
