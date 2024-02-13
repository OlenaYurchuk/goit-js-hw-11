import { KEY } from "./pixabay-api";

function fetchImageCards(searchItems) {
   return fetch(`https://pixabay.com/api/?key=${KEY}&q=${searchItems}s&image_type=photo&orientation=horizontal&safesearch=true`)
}

export { fetchImageCards };