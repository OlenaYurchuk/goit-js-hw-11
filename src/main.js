import { KEY } from './js/pixabay-api.js';
import { galleryEl, createCardsList } from './js/render-functions.js';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const searchFormEl = document.querySelector('.search-form');
const inputEl = document.querySelector('.search-field');
const loaderEl = document.querySelector('.loader');

let searchQuery = '';
let lightbox = new SimpleLightbox('.gallery a', {});

searchFormEl.addEventListener('submit', onSearchForm);

function onSearchForm(e) {
    e.preventDefault();
    galleryEl.innerHTML = '';
    searchQuery = inputEl.value.trim();

    if (searchQuery === '') {
        iziToast.error({
            position: 'topRight',
            message: 'Please enter a search term.'
          });
        return;
    }
    fetchImageCards(searchQuery)
    
    searchFormEl.reset();       
}

function fetchImageCards(searchQuery) {
    clearAll();
    showLoader();
    return fetch(`https://pixabay.com/api/?key=${KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true`)
        .then(response => {
            if (!response.ok) {
                 throw new Error(response.status);
            }
               return response.json();
        })
        .then(data => {
            if (data.hits.length === 0) {
                hideLoader();
                iziToast.info({
                    position: 'topRight',
                    messageColor: 'black',
                    message: 'Sorry, there are no images matching <br/> your search query. Please try again!'
                });
            } else {
                hideLoader();
                createCardsList(data.hits);
                lightbox.refresh();
            }
        })
        .catch((error) => {
            hideLoader();
            iziToast.error({
                position: 'topRight',
                message: 'Something went wrong. Please try again!'
            });
        })
}

function clearAll() {
    galleryEl.innerHTML = '';
}

function showLoader() {
    loaderEl.classList.remove('hidden');
}

function hideLoader() {
    loaderEl.classList.add('hidden');
}