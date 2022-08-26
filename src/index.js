import getEvens from './js/getEvents';
import temlateCards from './templates/temlateCards.hbs';
const inputEl = document.querySelector('.search-form');
const listItemEl = document.querySelector('.event-list');

inputEl.addEventListener('click', onInputClick);
async function onInputClick(event) {
  const { _embedded } = await getEvens('', 'UK');
  console.log(_embedded.events);

  const listItem = _embedded.events.map(item => temlateCards(item)).join('');
  listItemEl.insertAdjacentHTML('beforeend', listItem);
}
