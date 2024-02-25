import { KEY } from './js/pixabay-api.js';
import { galleryEl, createCardsList } from './js/render-functions.js';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const searchFormEl = document.querySelector('.search-form');
const inputEl = document.querySelector('.search-field');
const loaderEl = document.querySelector('.loader');

let searchItems = '';
let lightbox = new SimpleLightbox('.gallery a', {});

searchFormEl.addEventListener('submit', onSearchForm);

function onSearchForm(e) {
    e.preventDefault();
    galleryEl.innerHTML = '';
    searchItems = inputEl.value.trim();

    if (searchItems === '') {
        clearAll();
        return;
    }
    fetchImageCards(searchItems)
    
    searchFormEl.reset();       
}

function fetchImageCards(searchItems) {
    return fetch(`https://pixabay.com/api/?key=${KEY}&q=${searchItems}&image_type=photo&orientation=horizontal&safesearch=true`)
        .then(response => {
            if (!response.ok) {
                 throw new Error(response.status);
            }
               return response.json();
        })
        .then(data => {
              loaderEl.classList.remove('hidden');
            if (data.hits.length === 0) {
                loaderEl.classList.add('hidden');
                iziToast.error({
                    position: 'topRight',
                    message: 'Sorry, there are no images matching <br/> your search query. Please try again!'
                });
            } else {
                loaderEl.classList.add('hidden');
                createCardsList(data.hits);
                lightbox.refresh();
            }
        })
        .catch((error) => {
            loaderEl.classList.add('hidden');
            iziToast.error({
                position: 'topRight',
                message: 'Something went wrong. Please try again!'
            });
        })
}

function clearAll() {
    galleryEl.innerHTML = '';
}