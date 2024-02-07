import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { KEY } from "./js/api-key.js";



const searchFormEl = document.querySelector('.search-form');
const inputEl = document.querySelector('.search-field');
const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');

let searchItems = '';
let lightbox = new SimpleLightbox('.gallery a', {});
loaderEl.classList.add('hidden'); 


searchFormEl.addEventListener('submit', onSearchForm);

function onSearchForm(e) {
    e.preventDefault();
    galleryEl.innerHTML = '';
    searchItems = inputEl.value.trim();

    if (searchItems === '') {
        clearAll();
        return;
    }
    fetchImageCards(searchItems);
}

function fetchImageCards(searchItems) {
      fetch(`https://pixabay.com/api/?key=${KEY}&q=${searchItems}s&image_type=photo&orientation=horizontal&safesearch=true`)
            .then(response => {
                if (!response.ok) {
                 throw new Error(response.status);
                }
               return response.json();
            })
          .then(data => {
              loaderEl.classList.remove('hidden');
                if (data.totalHits === 0) {
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
            .catch((error) => console.log(error))
            .finally(() => {
                searchFormEl.reset();
            })
}
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(response.status);
//             }
//             console.log(response.json());
//             return response.json();
//         })
//         .catch((error) => console.log(error));
// }

// function createCard(cards) {
//     const cardEl = cards[0];
//     const readyCard = `<div class="card">
//         <div class="card-top">
//             <a class="card-link" href="${cardEl.largeImageURL}">
//                 <img class="card-image" src="${cardEl.webformatURL}" alt="${cardEl.tags}">
//             </a>
//         </div>
//         <div class="card-bottom">
//             <p class="card-likes">Likes: <span class="card-value">${cardEl.likes}</span></p>
//             <p class="card-views">Views: <span class="card-value">${cardEl.views}</span></p>
//             <p class="card-comments">Comments: <span class="card-value">${cardEl.comments}</span></p>
//             <p class="card-downloads">Downloads: <span class="card-value">${cardEl.downloads}</span></p>
//         </div>
//     </div>`
//     div.innerHTML = readyCard;
// };

function createCardsList(cards) {
    
    const markup = cards.map(card => 
        `<li class="gallery-item">
             <div class="card-top">
            <a class="card-link" href="${card.largeImageURL}">
                <img class="card-image" src="${card.webformatURL}" alt="${card.tags}">
            </a>
        </div>
        <div class="card-bottom">
            <p class="card-likes">Likes <span class="card-value">${card.likes}</span></p>
            <p class="card-views">Views <span class="card-value">${card.views}</span></p>
            <p class="card-comments">Comments <span class="card-value">${card.comments}</span></p>
            <p class="card-downloads">Downloads <span class="card-value">${card.downloads}</span></p>
        </div>
        </li>`
    ).join('');

    galleryEl.insertAdjacentHTML('beforeend', markup);
};

function clearAll() {
    galleryEl.innerHTML = '';
}