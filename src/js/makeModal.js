import doModal from '../templates/modal.hbs';
import axios from 'axios';

import getEvens from './getEvents';

const refs = {
  eventList: document.querySelector('.js-event-list'),
  modalContainer: document.querySelector('.js-modal'),
  closeModalBtn: document.querySelector('.js-modal-close-btn'),
};

refs.eventList.addEventListener('click', onOpenModal);
/* refs.closeModalBtn.addEventListener('click', onCloseModalBtn); */

/* async function getEventByID(eventId) {
  const url = 'https://app.ticketmaster.com/discovery/v2/events.json';
  const apiKey = 'w7mmBkK7aLh5F5nZUPuvBPD23VXj8bAs';
  const filter = `?apikey=${apiKey}&id=${eventId}`;
  return await axios.get(`${url}${filter}`).then(res => res.data);
} */

function getIdOnClickEventImg(e) {
  eventId = e.target.id;
  return eventId;
}

function getEventByID(eventId) {
  console.log(eventId);
}

async function onOpenModal(e) {
  if (e.target.nodeName !== 'IMG') return;
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
