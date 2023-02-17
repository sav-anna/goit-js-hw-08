import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const imgsMarkup = createGalleryImgMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imgsMarkup);

function createGalleryImgMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li><a class="gallery__item" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </li>`
    )
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
