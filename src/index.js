import preloader from './js/preloader.js';
import getEvens from './js/getEvents';
import temlateCards from './templates/temlateCards.hbs';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { renderPagination } from './js/pagination.js';
import btnToTop from './js/topBtn';
//////////////////////////
preloader();
const searchingInput = document.querySelector('.start-searching');
const countryInput = document.querySelector('.choose-country');
const listItemEl = document.querySelector('.event-list');
const DEBOUNCE_DELAY = 400;

let eventSearch;
let totalPages;

searchingInput.addEventListener(
  'input',
  debounce(onInputClick, DEBOUNCE_DELAY)
);

function onInputClick(event) {
  eventSearch = event.target.value;
  listItemEl.innerHTML = '';
  if (eventSearch === '') {
    return;
  }

  renderEvents();
}

async function renderEvents(page = 0) {
  const response = await getEvens(`${eventSearch}`, '', page);

  try {
    if (response.page.totalPages === 0) {
      listItemEl.innerHTML = '';
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }

    if (response._embedded.events.length > 0) {
      Notiflix.Notify.success(
        `Hooray! We found ${response._embedded.events.length} images.`
      );
      const listItem = response._embedded.events
        .map(item => temlateCards(item))
        .join('');
      listItemEl.innerHTML = listItem;

      totalPages =
        response.page.totalPages > 50 ? 50 : response.page.totalPages;
      renderPagination(totalPages, renderEvents);
    }
  } catch (error) {
    console.log(error);
  }
}
