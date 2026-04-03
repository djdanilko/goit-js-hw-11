// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');

form.addEventListener('submit', onSearch);

async function onSearch(event) {
  event.preventDefault();

  const query = event.target.elements['search-text'].value.trim();

  if (!query) return;

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query);

    if (data.hits.length === 0) {
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        messageColor: 'white',
        backgroundColor: 'red',
        position: 'topRight',
      });
      return;
    }

    createGallery(data.hits);
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
  }
}
