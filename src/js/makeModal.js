import doModal from '../templates/modal.hbs';
import axios from 'axios';

import getEvens from './getEvents';

const refs = {
  // old: eventList: document.querySelector('.event-card'),
  // old: eventList: document.querySelector('.js-event-list'),
  modalContainer: document.querySelector('.js-modal'),
  closeModalBtn: document.querySelector('.js-modal-close-btn'),
};

function getIdOnClickEventImg(e) {
  eventId = e.target.id;
  return eventId;
}

function getEventByID(eventId) {
  console.log(eventId);
}

export async function onOpenModal(e) {
  if (e.target.nodeName !== 'IMG') return;
  console.log(e.target);
  getIdOnClickEventImg(e);
  getEventByID(eventId);

  refs.modalContainer.innerHTML = doModal();
  refs.modalContainer.classList.remove('is-hidden');
  document.body.classList.add('no-scroll');
  refs.closeModalBtn = document.querySelector('.js-modal-close-btn');
  refs.closeModalBtn.addEventListener('click', onCloseModalBtn);
}

function onCloseModalBtn() {
  refs.closeModalBtn.removeEventListener('click', onCloseModalBtn);
  document.body.classList.remove('no-scroll');
  refs.modalContainer.classList.add('is-hidden');
}
// old: refs.eventList.addEventListener('click', onOpenModal);
