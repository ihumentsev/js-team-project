import preloader from './js/preloader.js';
import getEvens from './js/getEvents';
import temlateCards from './templates/temlateCards.hbs';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import {
  renderPagination,
  setCurrentPage,
  clearPagination,
} from './js/pagination.js';
import btnToTop from './js/topBtn';
import countrys from './json/countrys.json';
import temlateCountry from './templates/countrySelector.hbs';

preloader();
const searchingInput = document.querySelector('.start-searching');
const selectEl = document.querySelector('#search-country');
const listItemEl = document.querySelector('.event-list');
const formEl = document.querySelector('form');
const DEBOUNCE_DELAY = 400;

let eventSearch = '';
let totalPages;
let isSearching = false;
let countrySearch = '';

formEl.addEventListener('submit', event => {
  event.preventDefault();
});
searchingInput.addEventListener(
  'input',
  debounce(onInputClick, DEBOUNCE_DELAY)
);
selectEl.addEventListener('change', debounce(onSelectChange, DEBOUNCE_DELAY));
/////////////поиск по country
function onSelectChange(event) {
  countrySearch = event.target.value;
  renderEvents();
}

//////////////поиск по названию
function onInputClick(event) {
  eventSearch = event.target.value.trim();
  eventSearch;

  if (!eventSearch) {
    if (isSearching) {
      isSearching = false;
      setCurrentPage(0, renderEvents);
    }
    return;
  }

  isSearching = true;
  setCurrentPage(0, renderEvents);
}

renderEvents();
///////////////////////
async function renderEvents(page = 0) {
  const response = await getEvens(eventSearch, countrySearch, page);
  try {
    if (response.page.totalPages === 0) {
      listItemEl.innerHTML = '';
      clearPagination();
      Notiflix.Notify.failure(
        'Sorry, there are no events matching your search query. Please try again.',
        {
          borderRadius: '50px',
          failure: {
            childClassName: 'notiflix-notify-failure',
            background: 'rgba(255, 0, 60, 0.5),',
            textColor: '#dc56c5',
            notiflixIconColor: '#dc56c5',
          },
        }
      );
    }
    if (response.page.number === 49) {
      Notiflix.Notify.failure('F***k!!! No more results!!!', {
        borderRadius: '50px',
        failure: {
          childClassName: 'notiflix-notify-failure',
          background: 'rgba(255, 0, 60, 0.5),',
          textColor: '#dc56c5',
          notiflixIconColor: '#dc56c5',
        },
      });
    }
    if (response.page.totalPages > 0) {
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
/////////////////renderSelectCountrys
const selectOption = createOptions(countrys);

const optionList = selectOption.map(item => temlateCountry(item)).join('');
selectEl.insertAdjacentHTML('beforeend', optionList);

function createOptions(countrys) {
  return countrys;
}
