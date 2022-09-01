import doModal from '../templates/modal.hbs';
import axios from 'axios';

import getEvent from './getEventById';

const refs = {
  // old: eventList: document.querySelector('.event-card'),
  // old: eventList: document.querySelector('.js-event-list'),
  modalContainer: document.querySelector('.js-modal'),
  closeModalBtn: document.querySelector('.js-modal-close-btn'),
  moreFmAuthor: document.querySelector('.js-modal__more-btn'),
  inputSearchName: document.querySelector('.start-searching'),
  byTicktBtnStandart: document.querySelector('.js-prices__btn-st'),
  byTicktBtnVip: document.querySelector('.js-prices__btn-vip'),
};

export let eventSearch = '';
let moreEventFmAth = '';
let urlTicket = '';

export async function onOpenModal(e) {
  if (!e.target.closest('.event-thumb')) return;
  refs.modalContainer.classList.remove('is-hidden');
  let eventTarget = e.target.parentNode;
  let idElement = eventTarget.id;
  let response = await getEvent(idElement);
  let eventData = response._embedded.events[0];

  let time = '';
  time = eventData.dates.start.localTime.slice(0, -3);
  const newEventData = { ...eventData, time };
  console.log(newEventData);
  urlTicket = newEventData.url;
  refs.modalContainer.innerHTML = doModal(newEventData);

  refs.closeModalBtn = document.querySelector('.js-modal-close-btn');
  refs.closeModalBtn.addEventListener('click', onCloseModalBtn);
  document.addEventListener('keydown', onKeyDownEscape);
  refs.modalContainer.addEventListener('click', closemodalContainer);
  document.body.style = 'overflow-y: hidden;';
  refs.modalContainer.style = 'overflow-y: visible;';
  refs.moreFmAuthor = document.querySelector('.js-modal__more-btn');
  refs.moreFmAuthor.addEventListener('click', onMoreFmAuthor);
  refs.byTicktBtnStandart = document.querySelector('.js-prices__btn-st');
  refs.byTicktBtnVip = document.querySelector('.js-prices__btn-vip');
  refs.byTicktBtnStandart.addEventListener('click', buyTickets);
  refs.byTicktBtnVip.addEventListener('click', buyTickets);
  return (moreEventFmAth = newEventData.name);
}

function onKeyDownEscape(e) {
  if (e.code !== 'Escape') return;
  onCloseModalBtn();
}

function closemodalContainer(e) {
  if (!e.target.closest('.modal')) return;
  onCloseModalBtn();
}

function onCloseModalBtn() {
  refs.modalContainer.classList.add('is-hidden');
  document.body.style = 'overflow-y: visible;';
  refs.modalContainer.style = 'overflow-y: hidden;';
  refs.moreFmAuthor.removeEventListener('click', onMoreFmAuthor);
  refs.modalContainer.removeEventListener('click', closemodalContainer);
  document.removeEventListener('keydown', onKeyDownEscape);
  refs.closeModalBtn.removeEventListener('click', onCloseModalBtn);
  refs.byTicktBtnStandart.removeEventListener('click', buyTickets);
  refs.byTicktBtnVip.removeEventListener('click', buyTickets);
  /* document.body.classList.remove('no-scroll'); */
}
// old: refs.eventList.addEventListener('click', onOpenModal);

function onMoreFmAuthor(e) {
  if (!e.target.closest('.js-modal__more-btn')) return;
  refs.inputSearchName.value = moreEventFmAth;
  onCloseModalBtn();
  eventSearch = moreEventFmAth;
  return eventSearch;
}

function buyTickets(e) {
  document.location.href = urlTicket;
  onCloseModalBtn();
}
